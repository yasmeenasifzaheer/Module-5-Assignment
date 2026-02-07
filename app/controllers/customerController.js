const Customer = require("../models/Customer");

// GET all customers
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE customer
exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ UPDATE customer (PATCH)
exports.updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      req.body,
      {
        new: true,        // return updated document
        runValidators: true
      }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json(updatedCustomer);
  } catch (err) {
    console.error("Update customer error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
