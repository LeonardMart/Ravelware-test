import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Report from "./pages/report";
import FuelTransaction from "./pages/report/fuelTransaction";
import MachineUsage from "./pages/report/machineUsage";
import ManPower from "./pages/report/manPower";
import Profile from "./pages/profile";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Auth from "./pages/auth";
import History from "./pages/history";
import Management from "./pages/management";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />}>
            <Route
              path="fuel-transaction-history"
              element={<FuelTransaction />}
            />
            <Route path="machine-usage" element={<MachineUsage />} />
            <Route path="man-power-usage" element={<ManPower />} />
          </Route>
          <Route path="/history" element={<History />} />
          <Route path="/management" element={<Management />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
