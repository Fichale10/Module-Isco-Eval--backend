"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FormationParticipation extends Model {
    static associate(models) {
      // Chaque participation appartient à une formation
      this.belongsTo(models.Formation, { 
        foreignKey: "formationId" 
      });

      // Chaque participation appartient à un utilisateur
      this.belongsTo(models.Utilisateur, { 
        foreignKey: "utilisateurId" 
      });
    }
  }

  FormationParticipation.init(
    {
      statut: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      remarque: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: "FormationParticipation",
      paranoid: true,
    }
  );

  return FormationParticipation;
};
