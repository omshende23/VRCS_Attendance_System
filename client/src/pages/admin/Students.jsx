 // ============================================
// Imports
// ============================================

import AddStudentModal from "../../components/admin/AddStudentModal";
import { useEffect, useState } from "react";
import API from "../../services/api";
import StudentTable from "../../components/admin/StudentTable";

// ============================================
// Students Component
// ============================================

function Students() {

  // ============================================
  // State Management
  // ============================================

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  // ============================================
  // Edit Student State
  // ============================================

  const [editStudent, setEditStudent] = useState(null);

  // ============================================
  // Get All Students
  // ============================================

  const getStudents = async () => {

    try {

      const response = await API.get("/students");

      setStudents(response.data.students);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // ============================================
  // Page Load
  // ============================================

  useEffect(() => {

    getStudents();

  }, []);

  // ============================================
  // Search Filter
  // ============================================

  const filteredStudents = students.filter((student) =>
    student.fullName.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase()) ||
    student.mobile.includes(search) ||
    student.batch.toLowerCase().includes(search.toLowerCase())
  );

  // ============================================
  // UI
  // ============================================

  return (

    <div className="p-8">

      {/* ============================================
          Page Header
      ============================================ */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-[#0A2A66]">
            Students
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all registered students.
          </p>

        </div>

        <button
          onClick={() => {
            setEditStudent(null);
            setIsModalOpen(true);
          }}
          className="bg-[#FF6B00] text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          + Add Student
        </button>

      </div>

      {/* ============================================
          Search Box
      ============================================ */}

      <div className="my-6">

        <input
          type="text"
          placeholder="🔍 Search by Name, Email, Mobile or Batch..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
        />

      </div>

      {/* ============================================
          Student Table
      ============================================ */}

      {loading ? (

        <h2 className="text-center text-gray-500 text-xl">
          Loading...
        </h2>

      ) : (

        <StudentTable
          students={filteredStudents}
          onRefresh={getStudents}
          onEdit={(student) => {
            setEditStudent(student);
            setIsModalOpen(true);
          }}
        />

      )}

      {/* ============================================
          Add / Edit Student Modal
      ============================================ */}

      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditStudent(null);
        }}
        onSuccess={() => {
          getStudents();
          setEditStudent(null);
        }}
        editStudent={editStudent}
      />

    </div>

  );
}

export default Students;