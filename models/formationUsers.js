"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FormationUsers extends Model { static associate(models) { this.belongsTo(models.Formation, { foreignKey: "formationId" }); this.belongsTo(models.Utilisateur, { foreignKey: "utilisateurId" }); } }
  FormationUsers.init({ statut: DataTypes.STRING, note: DataTypes.FLOAT }, { sequelize, modelName: "FormationUsers", paranoid: false });
  return FormationUsers;
};
 
