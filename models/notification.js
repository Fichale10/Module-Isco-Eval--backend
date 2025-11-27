"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model { static associate(models) { this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" }); } }
  Notification.init({ title: DataTypes.STRING, body: DataTypes.TEXT, data: DataTypes.JSON, readAt: DataTypes.DATE }, { sequelize, modelName: "Notification", paranoid: false });
  return Notification;
};
 
