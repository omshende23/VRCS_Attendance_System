 import {
  FaUserPlus,
  FaBookMedical,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-50">

      <h2 className="text-2xl font-bold text-[#0A2A66] mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-2">

        <div className="bg-[#0A2A66] text-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
          <FaUserPlus size={34} />
          <p className="mt-3 font-semibold text-center">
            Add Student
          </p>
        </div>

        <div className="bg-[#FF6B00] text-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
          <FaBookMedical size={34} />
          <p className="mt-3 font-semibold text-center">
            Create Batch
          </p>
        </div>

        <div className="bg-green-600 text-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
          <FaClipboardCheck size={34} />
          <p className="mt-3 font-semibold text-center">
            Attendance
          </p>
        </div>

        <div className="bg-purple-600 text-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
          <FaChartLine size={34} />
          <p className="mt-3 font-semibold text-center">
            Reports
          </p>
        </div>

      </div>

    </div>
  );
}

export default QuickActions;