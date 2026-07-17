const Student = require("../models/Student");

// ==============================
// Add Student
// ==============================

exports.addStudent = async (req, res) => {
  try {
    const { fullName, email, mobile, batch, gender } = req.body;
    // ==============================
// Name Validation
// ==============================

if (fullName.trim().length < 3) {
  return res.status(400).json({
    success: false,
    message: "Full Name must be at least 3 characters.",
  });
}

const nameRegex = /^[A-Za-z ]+$/;

if (!nameRegex.test(fullName)) {
  return res.status(400).json({
    success: false,
    message: "Name can contain only letters and spaces.",
  });
}

// ==============================
// Mobile Validation
// ==============================

const mobileRegex = /^[6-9]\d{9}$/;

if (!mobileRegex.test(mobile)) {
  return res.status(400).json({
    success: false,
    message: "Enter a valid 10-digit mobile number.",
  });
}

const invalidNumbers = [
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
  "1234567890",
];

if (invalidNumbers.includes(mobile)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid mobile number.",
  });
}

    if (!fullName || !email || !mobile || !batch) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const exists = await Student.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Student already exists",
      });
    }

    const student = await Student.create({
      fullName,
      email,
      mobile,
      batch,
      gender,
    });

    res.status(201).json({
      success: true,
      message: "Student Added Successfully",
      student,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};
// ==============================
// Get All Students
// ==============================

exports.getStudents = async (req, res) => {
  try {

    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};
// ==============================
// Update Student
// ==============================

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
      student,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};
// ==============================
// Delete Student
// ==============================

exports.deleteStudent = async (req, res) => {
  try {

    const { id } = req.params;

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};