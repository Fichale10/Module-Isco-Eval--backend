"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {
    static associate(models) {
      this.belongsTo(models.Structure, { foreignKey: "structureId" });

      this.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: "userId"
      });

      this.hasMany(models.Absence, { foreignKey: "utilisateurId" });
      this.hasMany(models.Evaluation, { foreignKey: "utilisateurId" });
      this.hasOne(models.Avatar, { foreignKey: "utilisateurId" });
      this.hasMany(models.Notification, { foreignKey: "utilisateurId" });
      this.hasMany(models.Contrat, { foreignKey: "utilisateurId" });
      this.hasMany(models.FormationParticipation, { foreignKey: "utilisateurId" });
      this.hasMany(models.StatusUtilisateur, { foreignKey: "utilisateurId" });
    }
  }

  Utilisateur.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },

      prenom: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      // 👉 AJOUT ICI : Champs pour OTP
      resetOtp: {
        type: DataTypes.STRING,
        allowNull: true
      },

      resetOtpExpires: {
        type: DataTypes.DATE,
        allowNull: true
      },

      poste: DataTypes.STRING,

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },

      lastLogin: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Utilisateur",
      paranoid: true
    }
  );

  return Utilisateur;
};
