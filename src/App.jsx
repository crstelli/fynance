import { BrowserRouter, Routes, Route } from "react-router";

import { Landing } from "./features/landing/pages/Landing";
import { Login } from "./features/login/pages/Login";

import { Dashboard } from "./features/app/dashboard/pages/Dashboard";
import { Incomes } from "./features/app/incomes/pages/Incomes";
import { Expences } from "./features/app/expences/pages/Expences";
import { Settings } from "./features/app/settings/pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expences" element={<Expences />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
