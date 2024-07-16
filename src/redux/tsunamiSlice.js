// src/redux/tsunamiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: "Informasi tentang tsunami.",
  loading: false,
  error: null,
};

export const tsunamiSlice = createSlice({
  name: "tsunami",
  initialState,
  reducers: {
    fetchInfoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchInfoSuccess: (state, action) => {
      state.loading = false;
      state.info = action.payload;
    },
    fetchInfoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchInfoRequest, fetchInfoSuccess, fetchInfoFailure } =
  tsunamiSlice.actions;

export const selectTsunamiInfo = (state) => state.tsunami.info;
export const selectTsunamiLoading = (state) => state.tsunami.loading;
export const selectTsunamiError = (state) => state.tsunami.error;

export default tsunamiSlice.reducer;
