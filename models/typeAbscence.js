"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeAbsence extends Model { static associate(models) { this.hasMany(models.Absence, { foreignKey: "typeAbsenceId" }); } }
  TypeAbsence.init({ slug: DataTypes.STRING, libelle: DataTypes.STRING }, { sequelize, modelName: "TypeAbsence", paranoid: true });
  return TypeAbsence;
};
 
