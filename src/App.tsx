import { Route, Routes } from "react-router";

import { DashboardLayout } from "./layouts/dashbaord-layout";
import Home from "./pages/dashboard/home";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
