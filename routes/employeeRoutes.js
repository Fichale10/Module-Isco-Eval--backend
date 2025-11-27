 const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const auth = require("../middlewares/authMiddleware");

router.get("/", auth, employeeController.getEmployees);
router.post("/", auth, employeeController.createEmployee);

module.exports = router;

