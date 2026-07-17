// ============================================
// Imports
// ============================================

import { useState, useEffect } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";

// ============================================
// Add Student Modal Component
// ============================================

function AddStudentModal({
  isOpen,
  onClose,
  onSuccess,
  editStudent = null,
}) {

  // ============================================
  // State Management
  // ============================================

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    batch: "",
    gender: "Male",
  });

  const [loading, setLoading] = useState(false);

  // ============================================
  // Edit Mode
  // ============================================

  useEffect(() => {

    if (editStudent) {

      setFormData({
        fullName: editStudent.fullName || "",
        email: editStudent.email || "",
        mobile: editStudent.mobile || "",
        batch: editStudent.batch || "",
        gender: editStudent.gender || "Male",
      });

    } else {

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        batch: "",
        gender: "Male",
      });

    }

  }, [editStudent]);

  if (!isOpen) return null;

  // ============================================
  // Handle Input Change
  // ============================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // ============================================
  // Submit Form
  // ============================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    // ============================================
    // Name Validation
    // ============================================

    if (formData.fullName.trim().length < 3) {
      toast.error("Full Name must be at least 3 characters.");
      return;
    }

    const nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(formData.fullName)) {
      toast.error("Name can contain only letters and spaces.");
      return;
    }

    // ============================================
    // Mobile Validation
    // ============================================

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(formData.mobile)) {
      toast.error("Please enter a valid mobile number.");
      return;
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

    if (invalidNumbers.includes(formData.mobile)) {
      toast.error("Please enter a valid mobile number.");
      return;
    }

    try {

      setLoading(true);

      // ============================================
      // Add OR Update Student
      // ============================================

      if (editStudent) {

        await API.put(
          `/students/update/${editStudent._id}`,
          formData
        );

        toast.success("Student Updated Successfully");

      } else {

        await API.post("/students/add", formData);

        toast.success("Student Added Successfully");

      }

      onSuccess();
      onClose();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };

    // ============================================
  // UI
  // ============================================

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        {/* ============================================
            Modal Title
        ============================================ */}

        <h2 className="text-3xl font-bold text-[#0A2A66] mb-6">

          {editStudent ? "Edit Student" : "Add Student"}

        </h2>

        {/* ============================================
            Form
        ============================================ */}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          {/* Email */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          {/* Mobile */}

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");

              if (value.length <= 10) {
                setFormData({
                  ...formData,
                  mobile: value,
                });
              }
            }}
            className="w-full border rounded-xl p-3"
            maxLength={10}
            required
          />

          {/* Batch */}

          <select
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          >
            <option value="">Select Batch</option>
            <option value="C Programming">C Programming</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Full Stack Development">
              Full Stack Development
            </option>
            <option value="Data Structures">
              Data Structures
            </option>
            <option value="Aptitude">
              Aptitude
            </option>
            <option value="Interview Preparation">
              Interview Preparation
            </option>
          </select>

          {/* Gender */}

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* Buttons */}

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#FF6B00] text-white"
            >
              {loading
                ? (editStudent ? "Updating..." : "Saving...")
                : (editStudent ? "Update Student" : "Save Student")}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStudentModal;