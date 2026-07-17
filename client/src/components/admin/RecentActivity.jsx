 import {
  FaClock,
  FaUserGraduate,
  FaClipboardCheck,
  FaBookOpen,
} from "react-icons/fa";

function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full">

      <h2 className="text-2xl font-bold text-[#0A2A66] mb-6">
        Recent Activity
      </h2>

      <div className="flex flex-col items-center justify-center py-12">

        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-5">
          <FaClock className="text-4xl text-gray-500" />
        </div>

        <h3 className="text-2xl font-bold text-gray-700">
          No Activity Yet
        </h3>

        <p className="text-gray-500 text-center mt-3 max-w-md">
          Student registrations, attendance updates,
          batches and reports will appear here.
        </p>

      </div>

      <hr className="my-6" />

      <div className="space-y-4">

        <div className="flex items-center gap-4 text-gray-400">
          <FaUserGraduate />
          <span>No students added</span>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <FaBookOpen />
          <span>No batches created</span>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <FaClipboardCheck />
          <span>No attendance marked</span>
        </div>

      </div>

    </div>
  );
}

export default RecentActivity;