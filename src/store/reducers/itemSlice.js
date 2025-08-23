import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addItemToList(state, action) {
      state.items.push(action.payload);
    },
  },
});

export default itemSlice.reducer;

export const { setItems, addItemToList } = itemSlice.actions;
