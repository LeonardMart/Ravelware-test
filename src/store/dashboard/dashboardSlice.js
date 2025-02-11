import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fuelStatus: [],
  fuelUsage: [],
  carUsage: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setFuelStatus: (state, action) => {
      state.fuelStatus = action.payload;
    },
    setFuelUsage: (state, action) => {
      state.fuelUsage = action.payload;
    },
    setCarUsage: (state, action) => {
      state.carUsage = action.payload;
    },
  },
});

export const { setFuelStatus, setFuelUsage, setCarUsage } = dashboardSlice.actions;
export default dashboardSlice.reducer;
