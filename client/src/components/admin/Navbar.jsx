 function Navbar() {

  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <h2 className="text-2xl font-bold text-[#0A2A66]">
        Admin Dashboard
      </h2>

      <div className="text-right">

        <h3 className="font-semibold">
          {admin?.name}
        </h3>

        <p className="text-gray-500 text-sm">
          {admin?.email}
        </p>

      </div>

    </div>
  );
}

export default Navbar;