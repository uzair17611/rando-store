import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.items = actions.payload;
    },
  },
});

export default itemSlice.reducer;

export const { setItems } = itemSlice.actions;
