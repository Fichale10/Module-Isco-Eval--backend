"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FormationsUsers", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      formationId:{ type:Sequelize.BIGINT, references:{ model:"Formations", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      utilisateurId:{ type:Sequelize.BIGINT, references:{ model:"Utilisateurs", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      statut:{ type:Sequelize.STRING },
      note:{ type:Sequelize.FLOAT },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("FormationsUsers"); }
};
 
