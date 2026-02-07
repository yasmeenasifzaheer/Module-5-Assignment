const express = require("express");
const router = express.Router();
const { createCase, updateCase, getCases } = require("../controllers/caseController");
const authMiddleware = require("../middleware/authMiddleware");

// Create case
router.post("/", authMiddleware, createCase);

// Get all cases  ✅ ADD THIS
router.get("/", authMiddleware, getCases);

// Update case
router.patch("/:id", authMiddleware, updateCase);

module.exports = router;
