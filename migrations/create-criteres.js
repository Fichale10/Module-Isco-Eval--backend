"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Criteres", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      libelle:{ type:Sequelize.STRING, allowNull:false },
      poids:{ type:Sequelize.FLOAT, defaultValue:1 },
      typeEvaluationId:{ type:Sequelize.BIGINT, references:{ model:"TypeEvaluations", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Criteres"); }
};
 
