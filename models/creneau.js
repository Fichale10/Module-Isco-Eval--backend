"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Creneau extends Model { static associate(models) { this.belongsTo(models.Planning, { foreignKey: "planningId" }); this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" }); } }
  Creneau.init({ date: DataTypes.DATE, durationMinutes: DataTypes.INTEGER }, { sequelize, modelName: "Creneau", paranoid: true });
  return Creneau;
};
 
