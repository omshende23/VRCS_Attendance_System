 import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../services/api";
import Logo from "../../assets/images/vrcs logo 1.png";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post("/auth/admin/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "admin",
        JSON.stringify(response.data.admin)
      );

      alert("Login Successful");

      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2A66] to-[#123B8F] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-[#0A2A66] flex flex-col items-center justify-center p-16 text-white">
          <img
            src={Logo}
            alt="VR CodeSphere"
            className="w-72 mb-8"
          />

          <h2 className="text-3xl font-bold">
            Welcome to VR CodeSphere
          </h2>

          <p className="mt-4 text-center text-gray-300">
            Turning Vision Into Reality
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-10">
          <div className="w-full max-w-md">

            <h1 className="text-4xl font-bold text-[#0A2A66]">
              Admin Login
            </h1>

            <p className="text-gray-500 mt-2 mb-8">
              Sign in to continue
            </p>

            <form onSubmit={handleLogin} className="space-y-5">

              <div>
                <label className="font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full h-14 px-5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] outline-none"
                />
              </div>

              <div>
                <label className="font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full h-14 px-5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[#FF6B00] text-white font-semibold hover:bg-orange-600 transition duration-300"
              >
                {loading ? "Logging In..." : "Login"}
              </button>

            </form>

            <p className="text-center mt-6 text-gray-500">
              Student?
              <Link
                to="/student/login"
                className="text-[#FF6B00] font-semibold ml-2"
              >
                Student Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;