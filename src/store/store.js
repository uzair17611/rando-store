import { configureStore } from "@reduxjs/toolkit";
import Cart from "./reducers/cartSlice";
import Item from "./reducers/itemSlice";
import Alerts from "./reducers/alertSlice";

const store = configureStore({
  reducer: {
    Cart,
    Item,
    Alerts,
  },
});

export const { dispatch, getState } = store;
export default store;
