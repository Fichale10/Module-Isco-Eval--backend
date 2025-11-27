"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TypeContrat extends Model {
    /**
     * Associations
     */
    static associate(models) {
      // Un type de contrat possède plusieurs contrats
      this.hasMany(models.Contrat, {
        foreignKey: "typeContratId",
        as: "contrats",
      });
    }
  }

  TypeContrat.init(
    {
      libelle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TypeContrat",
      paranoid: true,
    }
  );

  return TypeContrat;
};
 
