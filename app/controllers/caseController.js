// app/controllers/caseController.js
const Case = require("../models/Case");

// Create a new case
exports.createCase = async (req, res) => {
  try {
    const { customer_id, assigned_to, priority, status } = req.body;

    if (!customer_id || !assigned_to || !priority || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCase = await Case.create({
      customer_id,
      assigned_to,
      priority,
      status,
      created_at: new Date(),
    });

    res.status(201).json(newCase);
  } catch (err) {
    console.error("Error creating case:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update an existing case by ID
exports.updateCase = async (req, res) => {
  try {
    const caseId = req.params.id;
    const updates = req.body;

    const updatedCase = await Case.findByIdAndUpdate(caseId, updates, {
      new: true, // return the updated document
      runValidators: true, // validate fields
    });

    if (!updatedCase) {
      return res.status(404).json({ message: "Case not found" });
    }

    res.json(updatedCase);
  } catch (err) {
    console.error("Error updating case:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
