import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex bg-gray-800">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`w-full transition-all duration-300`}>
        <div
          className={`sticky top-0 z-50 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        </div>
        <div
          className={`p-5 bg-gray-800 min-h-screen text-white transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
