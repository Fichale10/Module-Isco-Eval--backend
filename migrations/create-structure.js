"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Structures", {
      id: { allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      slug: { type: Sequelize.STRING, allowNull:false },
      name: { type: Sequelize.STRING, allowNull:false },
      structureId: { type: Sequelize.BIGINT, references:{ model:"Structures", key:"id" }, onUpdate:"CASCADE", onDelete:"SET NULL" },
      typeStructureId: { type: Sequelize.BIGINT, references:{ model:"TypeStructures", key:"id" }, onUpdate:"CASCADE", onDelete:"SET NULL" },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Structures"); }
};
 
