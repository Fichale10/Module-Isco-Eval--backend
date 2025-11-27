"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Plannings", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      title:{ type:Sequelize.STRING },
      structureId:{ type:Sequelize.BIGINT, references:{ model:"Structures", key:"id" }, onDelete:"SET NULL", onUpdate:"CASCADE" },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Plannings"); }
};
 
