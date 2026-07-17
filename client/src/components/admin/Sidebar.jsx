 import Logo from "../../assets/images/vrcs logo 1.png";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUserGraduate,
  FaBookOpen,
  FaClipboardCheck,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="w-53 bg-[#0A2A66] text-white min-h-screen shadow-xl flex flex-col">

      {/* Logo */}
      <div className="p-6 flex-1">

        <img
          src={Logo}
          alt="VR CodeSphere"
          className="w-52 mx-auto"
        />

        <hr className="my-6 border-blue-400" />

        <ul className="space-y-2">

          <NavLink to="/admin/dashboard">
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  isActive ? "bg-[#123B8F]" : "hover:bg-[#123B8F]"
                }`}
              >
                <FaHome size={20} />
                Dashboard
              </li>
            )}
          </NavLink>

          <NavLink to="/admin/students">
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  isActive ? "bg-[#123B8F]" : "hover:bg-[#123B8F]"
                }`}
              >
                <FaUserGraduate size={20} />
                Students
              </li>
            )}
          </NavLink>

          <li className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#123B8F] cursor-pointer transition-all duration-300">
            <FaBookOpen size={20} />
            Batches
          </li>

          <li className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#123B8F] cursor-pointer transition-all duration-300">
            <FaClipboardCheck size={20} />
            Attendance
          </li>

          <li className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#123B8F] cursor-pointer transition-all duration-300">
            <FaChartBar size={20} />
            Reports
          </li>

          <li className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#123B8F] cursor-pointer transition-all duration-300">
            <FaCog size={20} />
            Settings
          </li>

        </ul>

      </div>

      {/* Logout */}
      <div className="p-6">

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-blue-800 hover:bg-red-600 transition-all duration-300"
        >
          <FaSignOutAlt size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;