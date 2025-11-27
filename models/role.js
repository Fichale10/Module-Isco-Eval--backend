"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.belongsToMany(models.Utilisateur, { through: models.UserRole, foreignKey: "roleId" });
    }
  }
  Role.init({ libelle: DataTypes.STRING, slug: DataTypes.STRING }, { sequelize, modelName: "Role", paranoid: true });
  return Role;
};
 
