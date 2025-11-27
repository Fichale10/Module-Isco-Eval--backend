"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contrat extends Model { static associate(models) { this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" }); } }
  Contrat.init({ numero: DataTypes.STRING, dateDebut: DataTypes.DATE, dateFin: DataTypes.DATE, typeContrat: DataTypes.STRING, salaire: DataTypes.DECIMAL }, { sequelize, modelName: "Contrat", paranoid: true });
  return Contrat;
};
 
