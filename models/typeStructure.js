"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeStructure extends Model {
    static associate(models) {
      this.hasMany(models.Structure, { foreignKey: "typeStructureId" });
    }
  }
  TypeStructure.init({ slug: DataTypes.STRING, name: DataTypes.STRING, description: DataTypes.STRING }, { sequelize, modelName: "TypeStructure", paranoid: true });
  return TypeStructure;
};
 
