// "use client";


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItems: [],
  orderItems: [],
  wishlistItems: [],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.menuItems.push(action.payload);
    },
    addToOrder: (state, action) => {
      const itemExists = state.orderItems.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.orderItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.menuItems = state.menuItems.filter((item) => item.id !== action.payload);
    },
    removeFromOrder: (state, action) => {
      state.orderItems = state.orderItems.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.orderItems.find((item) => item.id === action.payload.itemId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearOrder: (state) => {
      state.orderItems = [];
    },
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
    },
    addComment: (state, action) => {
      const item = state.orderItems.find((item) => item.id === action.payload.itemId);
      if (item) {
        item.comment = action.payload.comment;
      }
    },
    addRating: (state, action) => {
      const item = state.orderItems.find((item) => item.id === action.payload.itemId);
      if (item) {
        item.rating = action.payload.rating;
      }
    },
  },
});

export const {
  addItem,
  addToOrder,
  removeItem,
  removeFromOrder,
  updateQuantity,
  clearOrder,
  addToWishlist,
  removeFromWishlist,
  addComment,
  addRating,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
