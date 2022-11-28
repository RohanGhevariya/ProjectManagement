const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    required: true,
    type: String,
  },
  taskDescription: {
    required: true,
    type: String,
  },
  startDate: {
    required: true,
    type: String,
  },
  endDate: {
    required: true,
    type: String,
  },
  hourlyRate: {
    required: true,
    type: String,
  },
  assignMemberId: {
    required: true,
    type: String,
  },
  assignMemberEmail: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  totalWorkingHours: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("Task", taskSchema);
