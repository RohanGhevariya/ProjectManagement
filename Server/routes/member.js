const express = require("express");
const Model = require("../models/members");
const router = express.Router();
const Task = require("../models/task");
/* create member*/
router.post("/addMember", async (req, res) => {
  const data = new Model({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    jobTitle: req.body.jobTitle,
    password: req.body.password,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/getAllMembers", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/getMember/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/logIn", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log(data);
  try {
    const findUser = await Model.findOne(data);
    console.log(findUser);
    if (findUser === null) {
      res
        .status(200)
        .json({ message: "User Not Found", data: [], success: false });
    } else {
      res
        .status(200)
        .json({ message: "LogIn Successfull", data: findUser, success: true });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/getMemberTask/:id", async (req, res) => {
  const data = { assignMemberId: req.params.id };
  try {
    const findTask = await Task.find(data);
    if (findTask.length === 0) {
      res.status(404).json({ message: "No Task Found" });
    } else {
      res.status(200).json(findTask);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
