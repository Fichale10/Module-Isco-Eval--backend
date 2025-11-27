"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
    static associate(models) {
      this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" });
    }
  }
  Avatar.init({ filename: DataTypes.STRING, path: DataTypes.STRING, mimeType: DataTypes.STRING, sizeBytes: DataTypes.INTEGER }, { sequelize, modelName: "Avatar", paranoid: true });
  return Avatar;
};
 
