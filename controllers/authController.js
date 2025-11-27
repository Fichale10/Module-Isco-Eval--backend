const authService = require("../services/auth.service");

module.exports = {
  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

 async login(req, res) {
  try {
    const { email, password } = req.body;   // ✅ email au lieu de username
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
},

  async sendOtp(req, res) {
  try {
    const { email } = req.body;   // ✅ on récupère email
    const response = await authService.sendOtpToUser(email);
    res.json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
    }
  },

 async verifyOtp(req, res) {
  try {
    const { email, otp } = req.body;    // ✅ email
    const response = await authService.verifyOtp(email, otp);
    res.json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
    }
  },

  async resetPassword(req, res) {
  try {
    const { email, newPassword } = req.body;   // ✅ email
    const response = await authService.resetPassword(email, newPassword);
    res.json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
    }
  },
};
