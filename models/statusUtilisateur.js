"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StatusUtilisateur extends Model {
    static associate(models) {
      this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" });
      this.belongsTo(models.Status, { foreignKey: "statusId" });
    }
  }
  StatusUtilisateur.init({ dateDebut: DataTypes.DATE, dateFin: DataTypes.DATE, note: DataTypes.STRING }, { sequelize, modelName: "StatusUtilisateur", paranoid: true });
  return StatusUtilisateur;
};
 
