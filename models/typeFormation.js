"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TypeFormation extends Model {
    static associate(models) {
      // Un TypeFormation possède plusieurs Formations
      this.hasMany(models.Formation, {
        foreignKey: "typeFormationId",
        as: "formations",
      });
    }
  }

  TypeFormation.init(
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
      modelName: "TypeFormation",
      paranoid: true,
    }
  );

  return TypeFormation;
};
 
