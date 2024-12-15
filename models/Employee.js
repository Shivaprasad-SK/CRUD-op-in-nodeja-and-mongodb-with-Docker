const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    patients: [{ type: String }], // Placeholder for future patient assignment
    projects: [{ type: String }], // Placeholder for future project assignment
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
