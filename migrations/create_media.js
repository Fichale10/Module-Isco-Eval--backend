"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Medias", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      filename:{ type:Sequelize.STRING },
      path:{ type:Sequelize.STRING },
      mimeType:{ type:Sequelize.STRING },
      sizeBytes:{ type:Sequelize.INTEGER },
      usage:{ type:Sequelize.STRING }, // e.g. 'a', 'a', 'document'
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Medias"); }
};
 
