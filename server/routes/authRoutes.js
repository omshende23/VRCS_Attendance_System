 const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudents,
} = require("../controllers/studentController");

router.post("/add", addStudent);

router.get("/", getStudents);

module.exports = router;