"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static associate(models) {
      this.hasMany(models.Absence, { foreignKey: "attachedMediaId" });
      this.hasMany(models.FormationMedia, { foreignKey: "mediaId" });
    }
  }
  Media.init({ filename: DataTypes.STRING, path: DataTypes.STRING, mimeType: DataTypes.STRING, sizeBytes: DataTypes.INTEGER, usage: DataTypes.STRING }, { sequelize, modelName: "Media", paranoid: true });
  return Media;
};
 
