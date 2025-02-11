import { useState } from "react";
import { Link } from "react-router-dom";
import RavelwareLogo from "../../assets/logo/ravelware-logo";

export default function Sidebar({ isOpen }) {
  const [isReportOpen, setReportOpen] = useState(false);

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
            <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
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
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    Fuel Transaction History
                  </Link>
                </li>
                <li>
                  <Link
                    to="/report/machine-usage"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    Machine Usage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/report/man-power-usage"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    Manpower Usage
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/history" className="block p-2 hover:bg-gray-700 rounded">
              History
            </Link>
          </li>
          <li>
            <Link
              to="/management"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Management
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block p-2 hover:bg-gray-700 rounded">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
