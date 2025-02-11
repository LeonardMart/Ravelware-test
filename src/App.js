import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages";
import Dashboard from "./pages/dashboard";
import Report from "./pages/report";
import FuelTransaction from "./pages/report/fuelTransaction";
import MachineUsage from "./pages/report/machineUsage";
import ManPower from "./pages/report/manPower";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />}>
            <Route
              path="fuel-transaction-history"
              element={<FuelTransaction />}
            />
            <Route path="machine-usage" element={<MachineUsage />} />
            <Route path="man-power-usage" element={<ManPower />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
