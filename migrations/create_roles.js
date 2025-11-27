"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      libelle:{ type:Sequelize.STRING, allowNull:false },
      slug:{ type:Sequelize.STRING, allowNull:false },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Roles"); }
};
