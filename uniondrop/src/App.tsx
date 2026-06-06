import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppShell from "./layouts/AppShell";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import DashboardLayout from "./layouts/DashboardLayout";

import Overview from "./pages/dashboard/Overview";
import Projects from "./pages/dashboard/Projects";

import Services from "./pages/Services";
import About from "./pages/About";
import Developer from "./pages/Developer";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC LAYOUT */}
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/developer" element={<Developer />} />

          {/* LEGAL PAGES (INSIDE SHELL - SAFE) */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Route>

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="projects" element={<Projects />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}