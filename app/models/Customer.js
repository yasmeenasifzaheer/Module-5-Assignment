const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  contact_info: String,
  status: String
});

module.exports = mongoose.model("Customer", CustomerSchema);
