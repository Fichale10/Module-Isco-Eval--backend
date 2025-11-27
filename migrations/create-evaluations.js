"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Evaluations", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      typeEvaluationId:{ type:Sequelize.BIGINT, references:{ model:"TypeEvaluations", key:"id" }, onDelete:"SET NULL", onUpdate:"CASCADE" },
      utilisateurId:{ type:Sequelize.BIGINT, references:{ model:"Utilisateurs", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      date:{ type:Sequelize.DATE },
      noteGlobale:{ type:Sequelize.FLOAT },
      commentaire:{ type:Sequelize.TEXT },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Evaluations"); }
};
 
