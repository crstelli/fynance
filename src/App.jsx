import { BrowserRouter, Routes, Route } from "react-router";

import { Landing } from "./features/landing/pages/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
