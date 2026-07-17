// ============================================
// Imports
// ============================================

import { useState } from "react";
import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import API from "../../services/api";
import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal";

// ============================================
// Student Table Component
// ============================================

function StudentTable({
  students,
  onRefresh,
  onEdit,
}) {

  // ============================================
  // State Management
  // ============================================

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // ============================================
  // Delete Student Function
  // ============================================

  const handleDelete = async () => {
    try {

      await API.delete(`/students/delete/${selectedStudent._id}`);

      toast.success("Student Deleted Successfully");

      setIsDeleteOpen(false);

      onRefresh();

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Delete Failed"
      );

    }
  };

  // ============================================
  // UI
  // ============================================

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          {/* ============================================
              Table Header
          ============================================ */}

          <thead className="bg-[#0A2A66] text-white">

            <tr>

              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Email</th>

              <th className="p-4 text-left">Mobile</th>

              <th className="p-4 text-left">Batch</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          {/* ============================================
              Table Body
          ============================================ */}

          <tbody>

            {students.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="text-center p-8 text-gray-500"
                >
                  No Students Found
                </td>

              </tr>

            ) : (

              students.map((student) => (

                <tr
                  key={student._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-medium">
                    {student.fullName}
                  </td>

                  <td className="p-4">
                    {student.email}
                  </td>

                  <td className="p-4">
                    {student.mobile}
                  </td>

                  <td className="p-4">
                    {student.batch}
                  </td>

                  <td className="p-4">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {student.status}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-4">

                      {/* ============================================
                          Edit Button
                      ============================================ */}

                     {/* ============================================
    Edit Button
============================================ */}

<button
  onClick={() => onEdit(student)}
  className="text-blue-600 hover:text-blue-800 transition duration-300"
>
  <FaEdit />
</button>

                      {/* ============================================
                          Delete Button
                      ============================================ */}

                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setIsDeleteOpen(true);
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* ============================================
          Delete Confirmation Modal
      ============================================ */}

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
}

export default StudentTable;