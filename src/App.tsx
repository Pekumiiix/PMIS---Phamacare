import { Route, Routes } from "react-router";

import { DashboardLayout } from "./layouts/dashbaord-layout";
import AuditTrialPage from "./pages/dashboard/audit-trial";
import Home from "./pages/dashboard/home";
import UsersPage from "./pages/dashboard/users";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/audit-trial" element={<AuditTrialPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
