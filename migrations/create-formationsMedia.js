"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FormationMedias", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      formationId:{ type:Sequelize.BIGINT, references:{ model:"Formations", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      mediaId:{ type:Sequelize.BIGINT, references:{ model:"Medias", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("FormationMedias"); }
};
 
