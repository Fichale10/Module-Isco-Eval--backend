"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FormationMedia extends Model { static associate(models) { this.belongsTo(models.Formation, { foreignKey: "formationId" }); this.belongsTo(models.Media, { foreignKey: "mediaId" }); } }
  FormationMedia.init({}, { sequelize, modelName: "FormationMedia", paranoid: false });
  return FormationMedia;
};
 
