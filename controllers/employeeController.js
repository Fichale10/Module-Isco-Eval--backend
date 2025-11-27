// src/controllers/employeeController.js
const Employee = require("../models/Employee"); // on utilise le modèle Sequelize

// Récupérer tous les employés
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};

// Créer un nouvel employé
exports.createEmployee = async (req, res) => {
  const { nom, poste, service_id } = req.body;

  try {
    const employee = await Employee.create({ nom, poste, service_id });
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
