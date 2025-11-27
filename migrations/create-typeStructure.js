"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TypeStructures", {
      id: { allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      slug: { type: Sequelize.STRING, allowNull:false },
      name: { type: Sequelize.STRING, allowNull:false },
      description: { type: Sequelize.STRING },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("TypeStructures"); }
};
 
