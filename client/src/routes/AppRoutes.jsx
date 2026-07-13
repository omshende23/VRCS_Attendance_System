import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLogin from "../pages/auth/AdminLogin";
import StudentLogin from "../pages/auth/StudentLogin";

import Dashboard from "../pages/admin/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route path="/" element={<Navigate to="/admin/login" />} />

        {/* Authentication */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;