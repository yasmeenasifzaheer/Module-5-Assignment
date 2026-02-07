const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: true
  },
  assigned_to: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Case", CaseSchema);

