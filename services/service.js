const cron = require("node-cron");
const Models = require("../models");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

/**
 * LISTE DES TABLES DE TON PROJET
 * 🔥 Basé sur ton modèle envoyé (employés, contrats, formations, absences, médias)
 */
const modelsToExport = [
  { name: "Employes", model: Models.Employe },
  { name: "Contrats", model: Models.Contrat },
  { name: "TypeContrats", model: Models.TypeContrat },

  { name: "Formations", model: Models.Formation },
  { name: "TypeFormations", model: Models.TypeFormation },

  { name: "Absences", model: Models.Absence },
  { name: "TypeAbsences", model: Models.TypeAbsence },
  { name: "AbsenceMedias", model: Models.AbsenceMedia },

  // Si ton modèle contient aussi des entités liées :
  { name: "Directions", model: Models.Direction },
  { name: "Services", model: Models.Service },
  { name: "Fonctions", model: Models.Fonction },

  // Pour l’authentification
  { name: "Users", model: Models.User },
  { name: "Roles", model: Models.Role },
];

/**
 * Fonction principale : génère le fichier Excel avec toutes les tables
 */
const executeAutoBackup = async () => {
  try {
    console.log("=== DÉBUT DU BACKUP AUTOMATIQUE ===");
    const workbook = new ExcelJS.Workbook();

    let totalTables = 0;
    let totalRows = 0;

    for (const { name, model } of modelsToExport) {
      try {
        console.log(` → Export de la table ${name}...`);

        const data = await model.findAll({
          paranoid: false,
          raw: true,
        });

        if (data.length === 0) continue;

        const worksheet = workbook.addWorksheet(name);

        const columns = Object.keys(data[0]).map((key) => ({
          header: key,
          key: key,
          width: 20,
        }));

        worksheet.columns = columns;

        const header = worksheet.getRow(1);
        header.font = { bold: true };
        header.alignment = { horizontal: "center", vertical: "middle" };

        data.forEach((row) => worksheet.addRow(row));

        totalTables++;
        totalRows += data.length;
      } catch (e) {
        console.log(` ✗ Erreur export ${name} :`, e.message);
      }
    }

    const exportDir = path.join(
      "public",
      "exports",
      "excelFiles",
      "database",
      "auto-backup"
    );

    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const now = new Date();
    const date = now.toISOString().split("T")[0];
    const time = now.toTimeString().split(" ")[0].replace(/:/g, "-");
    const fileName = `backup_${date}_${time}.xlsx`;

    const filePath = path.join(exportDir, fileName);
    await workbook.xlsx.writeFile(filePath);

    console.log(" ✓ Backup sauvegardé :", fileName);
    console.log("=== FIN BACKUP ===");

    return {
      success: true,
      filePath: `exports/excelFiles/database/auto-backup/${fileName}`,
      tables: totalTables,
      rows: totalRows,
    };
  } catch (error) {
    console.log("Erreur backup :", error);
    return { success: false, error: error.message };
  }
};

/**
 * Suppression des fichiers de +30 jours
 */
const cleanOldBackups = async (dir, days = 30) => {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  const now = Date.now();
  const limit = days * 24 * 60 * 60 * 1000;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    if (now - stats.mtimeMs > limit) fs.unlinkSync(fullPath);
  }
};

/**
 * Service automatique → tous les jours à 23:59
 */
const startAutoBackupService = () => {
  cron.schedule(
    "59 23 * * *",
    async () => {
      await executeAutoBackup();
    },
    {
      scheduled: true,
      timezone: "Africa/Lome",
    }
  );
};

module.exports = {
  startAutoBackupService,
  executeAutoBackup,
};
