import { Route, Routes } from "react-router";

import { DashboardLayout } from "./layouts/dashbaord-layout";
import Home from "./pages/dashboard/home";
import UsersPage from "./pages/dashboard/users";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
