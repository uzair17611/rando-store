import { configureStore } from "@reduxjs/toolkit";
import Cart from "./reducers/cartSlice";
import Item from "./reducers/itemSlice";

const store = configureStore({
  reducer: {
    Cart,
    Item,
  },
});

export const { dispatch, getState } = store;
export default store;
