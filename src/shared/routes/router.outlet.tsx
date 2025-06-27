import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardContainer from "../../pages/dashboard/container";

export default function Outlet() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DashboardContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
