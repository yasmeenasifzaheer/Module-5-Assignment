const express = require("express");
const router = express.Router();
const { createCase, updateCase } = require("../controllers/caseController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createCase);
router.patch("/:id", auth, updateCase);

module.exports = router;
