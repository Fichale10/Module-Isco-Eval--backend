"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AbsenceMedia extends Model {
    static associate(models) {
      this.belongsTo(models.Absence, { foreignKey: "absenceId" });
      this.belongsTo(models.Media, { foreignKey: "mediaId" });
    }
  }

  AbsenceMedia.init(
    {
      usage: DataTypes.STRING, // optionnel : 'justificatif', 'photo', etc.
    },
    {
      sequelize,
      modelName: "AbsenceMedia",
      paranoid: false, // pivot : pas de deletedAt
      tableName: "AbsenceMedias",
    }
  );

  return AbsenceMedia;
};
 
