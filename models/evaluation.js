"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model { static associate(models) { this.belongsTo(models.TypeEvaluation, { foreignKey: "typeEvaluationId" }); this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" }); this.hasMany(models.EvaluationItem, { foreignKey: "evaluationId" }); } }
  Evaluation.init({ date: DataTypes.DATE, noteGlobale: DataTypes.FLOAT, commentaire: DataTypes.TEXT }, { sequelize, modelName: "Evaluation", paranoid: true });
  return Evaluation;
};
 
