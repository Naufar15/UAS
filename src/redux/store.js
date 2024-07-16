// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import tsunamiReducer from "./tsunamiSlice";

export default configureStore({
  reducer: {
    tsunami: tsunamiReducer,
  },
});
