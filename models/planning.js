"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planning extends Model { static associate(models) { this.belongsTo(models.Structure, { foreignKey: "structureId" }); this.hasMany(models.Creneau, { foreignKey: "planningId" }); } }
  Planning.init({ title: DataTypes.STRING }, { sequelize, modelName: "Planning", paranoid: true });
  return Planning;
};
 
