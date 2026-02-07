const express = require("express");
const router = express.Router();
const {
  getCustomers,
  createCustomer,
  updateCustomer
} = require("../controllers/customerController");

const authMiddleware = require("../middleware/authMiddleware");

// GET customers
router.get("/", authMiddleware, getCustomers);

// CREATE customer
router.post("/", authMiddleware, createCustomer);

// UPDATE customer
router.patch("/:id", authMiddleware, updateCustomer);

module.exports = router;
