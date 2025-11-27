 const express = require("express");
const router = express.Router();
const evaluationController = require("../controllers/evaluationController");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth, evaluationController.createEvaluation);

module.exports = router;

