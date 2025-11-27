"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Utilisateurs", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      username:{ type:Sequelize.STRING, allowNull:false, unique:true },
      nom:{ type:Sequelize.STRING },
      prenom:{ type:Sequelize.STRING },
      email:{ type:Sequelize.STRING, allowNull:true, unique:true },
      password:{ type:Sequelize.STRING, allowNull:false },
      poste:{ type:Sequelize.STRING },
      structureId:{ type:Sequelize.BIGINT, references:{ model:"Structures", key:"id" }, onUpdate:"CASCADE", onDelete:"SET NULL" },
      isActive:{ type:Sequelize.BOOLEAN, defaultValue:true },
      lastLogin:{ type:Sequelize.DATE },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Utilisateurs"); }
};
