"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Formation extends Model {
    static associate(models) {
      this.belongsTo(models.Structure, { foreignKey: "structureId" });
      this.hasMany(models.FormationParticipation, { foreignKey: "formationId" });
      this.hasMany(models.FormationMedia, { foreignKey: "formationId" });
    }
  }
  Formation.init({ title: DataTypes.STRING, description: DataTypes.TEXT, startDate: DataTypes.DATE, endDate: DataTypes.DATE }, { sequelize, modelName: "Formation", paranoid: true });
  return Formation;
};
 
