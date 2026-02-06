const Case = require("../models/Case");

exports.createCase = async (req, res) => {
  const newCase = new Case(req.body);
  await newCase.save();
  res.json(newCase);
};

exports.updateCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
