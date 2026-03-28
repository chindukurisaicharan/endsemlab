import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

/* PUBLIC PAGES  */
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import StudentLogin from "./pages/StudentLogin";
import Signup from "./pages/Signup";

/* ADMIN  */
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Courses from "./pages/admin/Courses";
import Students from "./pages/admin/Students";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";

/* STUDENT  */
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard"; 
import MyCourses from "./pages/student/MyCourses";
import Planner from "./pages/student/Planner";
import StudentSettings from "./pages/student/StudentSettings";

/* NEW STUDENT PAGES */
import Progress from "./pages/student/Progress";
import Enrollments from "./pages/student/Enrollments";
import Timetable from "./pages/student/Timetable";
import Summary from "./pages/student/Summary";
import Notifications from "./pages/student/Notifications";

/* ROLE CHECK  */
function getRole() {
  return localStorage.getItem("role");
}

/* PROTECTED ROUTE  */
function ProtectedRoute({ role, children }) {
  const current = getRole();
  return current === role ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>

        {/* ===== ROOT ===== */}
        <Route path="/" element={<Dashboard />} />

        {/* ===== AUTH ===== */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/signup" element={<Signup />} />

        {/* ===== ADMIN SECTION ===== */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ===== STUDENT SECTION ===== */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="planner" element={<Planner />} />

          {/* NEW SIDEBAR ROUTES */}
          <Route path="progress" element={<Progress />} />
          <Route path="enrollments" element={<Enrollments />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="summary" element={<Summary />} />
          <Route path="notifications" element={<Notifications />} />

          <Route path="settings" element={<StudentSettings />} />
        </Route>

        {/* ===== FALLBACK ===== */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </HashRouter>
  );
}