const Case = require("../models/Case");

exports.createCase = async (req, res) => {
  try {
    console.log("Request body:", req.body); // debug input
    const newCase = await Case.create(req.body);
    res.json(newCase);
  } catch (err) {
    console.error(err); // log exact error
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.updateCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
