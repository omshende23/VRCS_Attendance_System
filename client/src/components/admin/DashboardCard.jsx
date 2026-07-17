 import React from "react";

function DashboardCard({ title, value, icon, color }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-l-4 p-8 min-h-[170px]"
      style={{ borderColor: color }}
    >
      <div className="flex items-center justify-between h-full">

        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
            {title}
          </h3>

          <h2 className="text-5xl font-bold text-[#0A2A66] mt-5">
            {value}
          </h2>
        </div>

        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}

export default DashboardCard;