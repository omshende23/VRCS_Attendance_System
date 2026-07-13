import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-[#0A2A66]">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome to VR CodeSphere Attendance System
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;