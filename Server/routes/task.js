const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.post("/addTask", async (req, res) => {
  const data = new Task({
    taskName: req.body.taskName,
    taskDescription: req.body.taskDescription,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    hourlyRate: req.body.hourlyRate,
    assignMemberId: req.body.assignMemberId,
    assignMemberEmail: req.body.assignMemberEmail,
    status: "Not Started",
    totalWorkingHours: "0",
  });
  try {
    const saveToData = await data.save();
    res
      .status(200)
      .json({ message: "Task Successfully Added", data: saveToData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/getAllTask", async (req, res) => {
  try {
    const data = await Task.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/updateTaskStatus", async (req, res) => {
  const data = { _id: req.body.id };
  const updateStatus = { status: req.body.status };
  try {
    const updatedData = await Task.updateOne(data, { $set: updateStatus }).then(
      (result) => {
        console.log(result);
        res.status(200).json({ message: "Task Update Sucessfully" });
      }
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/compeletedTask", async (req, res) => {
  const data = { _id: req.body.id };
  const updateStatus = {
    status: "Completed",
    totalWorkingHours: req.body.totalWorkingHours,
  };
  try {
    const updatedData = await Task.updateOne(data, { $set: updateStatus }).then(
      (result) => {
        console.log(result);
        res.status(200).json({ message: "Task Compeleted Sucessfully" });
      }
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
