import { Route, Routes } from "react-router";

import { DashboardLayout } from "./layouts/dashbaord-layout";
import AuditTrialPage from "./pages/dashboard/audit-trial";
import DailyReportPage from "./pages/dashboard/daily-report";
import PointOfSalePage from "./pages/dashboard/point-of-sale";
import PrescriptionPage from "./pages/dashboard/prescription";
import StockAndAlertsPage from "./pages/dashboard/stock-and-alerts";
import UsersPage from "./pages/dashboard/users";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/point-of-sale" element={<PointOfSalePage />} />
        <Route path="/daily-report" element={<DailyReportPage />} />
        <Route path="/prescription" element={<PrescriptionPage />} />
        <Route path="/stock-and-alerts" element={<StockAndAlertsPage />} />
        <Route path="/audit-trial" element={<AuditTrialPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
