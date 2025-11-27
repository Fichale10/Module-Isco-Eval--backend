"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // ajoute tes associations ici si besoin
    }
  }

  Employee.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      poste: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Employee",
      tableName: "employees",
      timestamps: true,
      paranoid: true,
    }
  );

  return Employee;
};
