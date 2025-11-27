"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      this.hasMany(models.Absence, { foreignKey: "statusId" });
      this.hasMany(models.StatusUtilisateur, { foreignKey: "statusId" });
    }
  }
  Status.init({ slug: DataTypes.STRING, libelle: DataTypes.STRING }, { sequelize, modelName: "Status", paranoid: true });
  return Status;
};
 
