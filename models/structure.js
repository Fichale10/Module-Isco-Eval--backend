"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Structure extends Model {
    static associate(models) {
      this.belongsTo(models.TypeStructure, { foreignKey: "typeStructureId" });
      this.belongsTo(models.Structure, { foreignKey: "structureId", as: "parent" });
      this.hasMany(models.Structure, { foreignKey: "structureId", as: "children" });
      this.hasMany(models.Utilisateur, { foreignKey: "structureId" });
      this.hasMany(models.TypeEvaluation, { foreignKey: "structureId" });
    }
  }
  Structure.init({ slug: DataTypes.STRING, name: DataTypes.STRING }, { sequelize, modelName: "Structure", paranoid: true });
  return Structure;
};
 
