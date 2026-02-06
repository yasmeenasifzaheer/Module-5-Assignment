const express = require("express");
const router = express.Router();
const { createCase, updateCase } = require("../controllers/caseController");
const authMiddleware = require("../middleware/authMiddleware");

// Create case
router.post("/", authMiddleware, createCase);

// Update case
router.patch("/:id", authMiddleware, updateCase);

module.exports = router;
