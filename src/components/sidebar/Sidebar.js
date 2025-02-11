import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RavelwareLogo from "../../assets/logo/ravelware-logo";

export default function Sidebar({ isOpen }) {
  const [isReportOpen, setReportOpen] = useState(false);
  const location = useLocation(); // Ambil lokasi URL saat ini

  // Fungsi untuk mengecek apakah link sedang aktif
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-950 text-white p-5 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div className="space-x-1.5 mb-6 flex flex-row items-end bg-gray-800 p-2 rounded-md">
        <RavelwareLogo className="w-8 h-8" />
        <div className="text-2xl font-bold tracking-widest">AVELWARE</div>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className={`block p-2 rounded ${
                isActive("/") ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              Dashboard
            </Link>
          </li>

          {/* Report Dropdown */}
          <li>
            <button
              className="w-full text-left p-2 hover:bg-gray-700 rounded flex justify-between"
              onClick={() => setReportOpen(!isReportOpen)}
            >
              Report
              <span>{isReportOpen ? "▲" : "▼"}</span>
            </button>
            {isReportOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/report/fuel-transaction-history"
                    className={`block p-2 rounded ${
                      isActive("/report/fuel-transaction-history")
                        ? "bg-blue-600"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    Fuel Transaction History
                  </Link>
                </li>
                <li>
                  <Link
                    to="/report/machine-usage"
                    className={`block p-2 rounded ${
                      isActive("/report/machine-usage")
                        ? "bg-blue-600"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    Machine Usage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/report/man-power-usage"
                    className={`block p-2 rounded ${
                      isActive("/report/man-power-usage")
                        ? "bg-blue-600"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    Manpower Usage
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/history"
              className={`block p-2 rounded ${
                isActive("/history") ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              History
            </Link>
          </li>
          <li>
            <Link
              to="/management"
              className={`block p-2 rounded ${
                isActive("/management") ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              Management
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`block p-2 rounded ${
                isActive("/profile") ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
