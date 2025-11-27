"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Absences", {
      id:{ allowNull:false, autoIncrement:true, primaryKey:true, type:Sequelize.BIGINT },
      utilisateurId:{ type:Sequelize.BIGINT, references:{ model:"Utilisateurs", key:"id" }, onDelete:"CASCADE", onUpdate:"CASCADE" },
      typeAbsenceId:{ type:Sequelize.BIGINT, references:{ model:"TypeAbsences", key:"id" }, onDelete:"SET NULL", onUpdate:"CASCADE" },
      dateDebut:{ type:Sequelize.DATE, allowNull:false },
      dateFin:{ type:Sequelize.DATE },
      raison:{ type:Sequelize.TEXT },
      statusId:{ type:Sequelize.BIGINT, references:{ model:"Statuses", key:"id" }, onDelete:"SET NULL", onUpdate:"CASCADE" },
      attachedMediaId:{ type:Sequelize.BIGINT, references:{ model:"Medias", key:"id" }, onDelete:"SET NULL", onUpdate:"CASCADE" },
      createdAt:{ allowNull:false, type:Sequelize.DATE },
      updatedAt:{ allowNull:false, type:Sequelize.DATE },
      deletedAt:{ type:Sequelize.DATE }
    });
  },
  async down(queryInterface){ await queryInterface.dropTable("Absences"); }
};
 
