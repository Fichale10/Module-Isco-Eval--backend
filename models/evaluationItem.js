"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class EvaluationItem extends Model {
    static associate(models) {
      // Un item appartient à une évaluation
      this.belongsTo(models.Evaluation, {
        foreignKey: "evaluationId",
        onDelete: "CASCADE"
      });

      // Un item appartient à un critère
      this.belongsTo(models.Critere, {
        foreignKey: "critereId",
        onDelete: "CASCADE"
      });
    }
  }

  EvaluationItem.init(
    {
      note: DataTypes.FLOAT,
      commentaire: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "EvaluationItem",
      paranoid: true,
    }
  );

  return EvaluationItem;
};
