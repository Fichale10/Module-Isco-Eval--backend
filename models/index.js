"use strict";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const sequelize = require("../config/db");

const db = {};

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.endsWith(".js")
  )
  .forEach((file) => {
    const filePath = path.join(__dirname, file);
    const loaded = require(filePath);

    // 🔍 DEBUG : montre ce que contient réellement chaque fichier
    console.log("Chargement modèle :", file, " -> type export :", typeof loaded);

    // ⚠️ Vérifie si l’export est bien une fonction
    if (typeof loaded !== "function") {
      console.error(
        "❌ ERREUR : Le fichier",
        file,
        "n'exporte pas une fonction. Export reçu :",
        loaded
      );
    }

    const model = loaded(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
