import React from "react";
import { Outlet } from "react-router-dom";

const Report = ({ children }) => {
    console.log("masuk sini")
  return (
    <div className="p-5 bg-gray-900 text-white shadow-lg">
      <Outlet />
    </div>
  );
};

export default Report;
