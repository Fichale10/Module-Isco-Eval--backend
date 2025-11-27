"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StatusUtilisateurs", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      utilisateurId:{ type:Sequelize.BIGINT, references:{ model:"Utilisateurs", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      statusId:{ type:Sequelize.BIGINT, references:{ model:"Statuses", key:"id" }, onDelete:"SET NULL", onUpdate:"CASCADE" },
      dateDebut:{ type:Sequelize.DATE },
      dateFin:{ type:Sequelize.DATE },
      note:{ type:Sequelize.STRING },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("StatusUtilisateurs"); }
};
 
