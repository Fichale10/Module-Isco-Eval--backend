"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Critere extends Model { static associate(models) { this.belongsTo(models.TypeEvaluation, { foreignKey: "typeEvaluationId" }); this.hasMany(models.EvaluationItem, { foreignKey: "critereId" }); } }
  Critere.init({ libelle: DataTypes.STRING, poids: DataTypes.FLOAT }, { sequelize, modelName: "Critere", paranoid: true });
  return Critere;
};
 
