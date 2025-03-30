// store.js
"use client";
import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "../state-management/RestaurantSlice";

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // Ensure correct slice is added
  },
});

export default store;
