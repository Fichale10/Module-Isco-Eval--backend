"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Creneaux", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      planningId:{ type:Sequelize.BIGINT, references:{ model:"Plannings", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      date:{ type:Sequelize.DATE, allowNull:false },
      durationMinutes:{ type:Sequelize.INTEGER },
      utilisateurId:{ type:Sequelize.BIGINT, references:{ model:"Utilisateurs", key:"id" }, onDelete:"SET NULL", onUpdate:"CASCADE" },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Creneaux"); }
};
 
