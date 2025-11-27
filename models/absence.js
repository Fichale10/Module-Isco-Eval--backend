"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Absence extends Model {
    static associate(models) {
      this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" });
      this.belongsTo(models.TypeAbsence, { foreignKey: "typeAbsenceId" });
      this.belongsTo(models.Status, { foreignKey: "statusId" });
      this.belongsTo(models.Media, { foreignKey: "attachedMediaId", as: "attachment" });
    }
  }
  Absence.init({ dateDebut: DataTypes.DATE, dateFin: DataTypes.DATE, raison: DataTypes.TEXT }, { sequelize, modelName: "Absence", paranoid: true });
  return Absence;
};
 
