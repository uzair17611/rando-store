import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromStorage,
  saveToStorage,
  clearStorage,
} from "../../Helper/helper.js";

const initialState = {
  cartItems: loadFromStorage("cart", []),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      saveToStorage("cart", state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveToStorage("cart", state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      clearStorage("cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
