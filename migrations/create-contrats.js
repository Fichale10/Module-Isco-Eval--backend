"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Contrats", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      numero:{ type:Sequelize.STRING },
      utilisateurId:{ type:Sequelize.BIGINT, references:{ model:"Utilisateurs", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      dateDebut:{ type:Sequelize.DATE },
      dateFin:{ type:Sequelize.DATE },
      typeContrat:{ type:Sequelize.STRING },
      salaire:{ type:Sequelize.DECIMAL(15,2) },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Contrats"); }
};
 
