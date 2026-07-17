 import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";
import DashboardCard from "../../components/admin/DashboardCard";
import QuickActions from "../../components/admin/QuickActions";
import RecentActivity from "../../components/admin/RecentActivity";

import {
  FaUserGraduate,
  FaBookOpen,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* Heading */}

          <h1 className="text-4xl font-bold text-[#0A2A66]">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage students, attendance and batches.
          </p>

          {/* Dashboard Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

            <DashboardCard
              title="Total Students"
              value="0"
              icon={<FaUserGraduate />}
              color="#0A2A66"
            />

            <DashboardCard
              title="Total Batches"
              value="0"
              icon={<FaBookOpen />}
              color="#FF6B00"
            />

            <DashboardCard
              title="Present Today"
              value="0"
              icon={<FaCheckCircle />}
              color="#22C55E"
            />

            <DashboardCard
              title="Absent Today"
              value="0"
              icon={<FaTimesCircle />}
              color="#EF4444"
            />

          </div>

          {/* Bottom Section */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

            <div className="lg:col-span-1">
              <QuickActions />
            </div>

            <div className="lg:col-span-2">
              <RecentActivity />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;