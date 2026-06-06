import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";

import Projects from "../pages/Projects";
import About from "../pages/About";
import Developer from "../pages/Developer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route
  path="/dashboard"
  element={
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  }
/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}