const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
// ==============================
// Add Student
// ==============================
router.post("/add", addStudent);

// ==============================
// Get All Students
// ==============================
router.get("/", getStudents);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

module.exports = router;