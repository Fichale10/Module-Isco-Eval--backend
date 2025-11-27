const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");        // <-- Import complet
const User = db.Utilisateur;            // <-- Le BON modèle Sequelize

module.exports = {

  // -------------------------
  // GENERATION D'OTP
  // -------------------------
  async sendOtpToUser(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Utilisateur introuvable");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    await user.update({
      resetOtp: otp,
      resetOtpExpires: expires,
    });

    console.log("OTP envoyé (DEBUG) :", otp);

    return { message: "OTP envoyé à l'utilisateur" };
  },

  // -------------------------
  // VERIFICATION OTP
  // -------------------------
  async verifyOtp(email, otp) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Utilisateur introuvable");

    if (!user.resetOtp || !user.resetOtpExpires)
      throw new Error("Aucun OTP généré");

    if (user.resetOtp !== otp) throw new Error("OTP invalide");

    if (new Date() > user.resetOtpExpires)
      throw new Error("OTP expiré");

    return { valid: true };
  },

  // -------------------------
  // RESET PASSWORD
  // -------------------------
  async resetPassword(email, newPassword) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Utilisateur introuvable");

    const hashed = await bcrypt.hash(newPassword, 10);

    await user.update({
      password: hashed,
      resetOtp: null,
      resetOtpExpires: null,
    });

    return { message: "Mot de passe réinitialisé avec succès" };
  },

  // -------------------------
  // LOGIN
  // -------------------------
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Utilisateur introuvable");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Mot de passe incorrect");

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return { token, user };
  },

  // -------------------------
  // REGISTER
  // -------------------------
  async register(data) {
  const hashed = await bcrypt.hash(data.password, 10);

  return await User.create({
    username: data.username,
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    password: hashed,
    poste: data.poste || null
    });
  }
};
