import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice"; // Import fuelSlice

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer, // Tambahkan fuel ke reducer
  },
});

export default store;
