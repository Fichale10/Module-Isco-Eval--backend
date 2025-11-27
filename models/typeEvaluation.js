"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeEvaluation extends Model { static associate(models) { this.belongsTo(models.Structure, { foreignKey: "structureId" }); this.hasMany(models.Critere, { foreignKey: "typeEvaluationId" }); this.hasMany(models.Evaluation, { foreignKey: "typeEvaluationId" }); } }
  TypeEvaluation.init({ slug: DataTypes.STRING, libelle: DataTypes.STRING }, { sequelize, modelName: "TypeEvaluation", paranoid: true });
  return TypeEvaluation;
};
 
