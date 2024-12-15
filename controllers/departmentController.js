const Department = require("../models/Department");

// Get all departments
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a department
exports.addDepartment = async (req, res) => {
  try {
    const newDepartment = new Department(req.body);
    const savedDepartment = await newDepartment.save();
    res.status(201).json(savedDepartment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a department
exports.updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedDepartment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a department
exports.deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Department deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
