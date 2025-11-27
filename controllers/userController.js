 const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");


exports.register = async (req, res) => {
  const { username, password, role_id } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (username, password, role_id)
      VALUES ($1, $2, $3)
      RETURNING id, username, role_id
    `;

    const result = await db.query(query, [username, hashed, role_id]);

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );

    if (result.rows.length === 0)
      return res.status(400).json({ message: "Utilisateur introuvable." });

    const user = result.rows[0];

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: "Mot de passe incorrect." });

    const token = jwt.sign(
      { id: user.id, role_id: user.role_id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

