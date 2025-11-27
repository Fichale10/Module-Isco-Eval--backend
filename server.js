require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");

// Middleware global
app.use(express.json());

// === ROUTES ===
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const evaluationRoutes = require("./routes/evaluationRoutes");
const userRoutes = require("./routes/userRoutes");

// === MAPPING DES ROUTES ===
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/users", userRoutes);


// === LANCEMENT DB PUIS SERVEUR ===
const PORT = process.env.PORT || 5000;

db.sequelize
  .authenticate()
  .then(() => db.sequelize.sync({ alter: true }))
  .then(() => {
    console.log("Base de données connectée !");
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur le port ${PORT}`);
    });
  })
  .catch((err) => console.error("Erreur connexion DB :", err));
