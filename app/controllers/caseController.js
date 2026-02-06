// app/controllers/caseController.js
const Case = require("../models/Case");

exports.createCase = async (req, res) => {
  try {
    const { customer_id, assigned_to, priority, status } = req.body;

    // Validate required fields
    if (!customer_id || !assigned_to || !priority || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new case
    const newCase = await Case.create({
      customer_id,
      assigned_to,
      priority,
      status,
      created_at: new Date(),
    });

    res.status(201).json(newCase);
  } catch (err) {
    console.error("Error creating case:", err.message); // log the error
    res.status(500).json({ message: "Internal Server Error" });
  }
};



exports.updateCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
