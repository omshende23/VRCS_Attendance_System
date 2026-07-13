function Sidebar() {
  return (
    <div className="w-72 bg-[#0A2A66] text-white min-h-screen p-6">

      <h2 className="text-3xl font-bold">
        VRCS
      </h2>

      <p className="text-gray-300 mt-2">
        Attendance System
      </p>

      <hr className="my-8 border-blue-400" />

      <ul className="space-y-5">

        <li className="cursor-pointer hover:text-orange-400">
          Dashboard
        </li>

        <li className="cursor-pointer hover:text-orange-400">
          Students
        </li>

        <li className="cursor-pointer hover:text-orange-400">
          Attendance
        </li>

        <li className="cursor-pointer hover:text-orange-400">
          Reports
        </li>

        <li className="cursor-pointer hover:text-orange-400">
          Settings
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;