import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarObj: null,
  loadingBackdrop: 0,
  beatLoader: 0,
};

const alertsSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setSnackbarObj: (state, action) => {
      state.snackbarObj = action.payload;
    },
    showLoadingBackdrop: (state) => {
      state.loadingBackdrop += 1;
    },
    hideLoadingBackdrop: (state) => {
      if (state.loadingBackdrop > 0) state.loadingBackdrop -= 1;
    },
    setShowBeatLoader: (state) => {
      state.beatLoader += 1;
    },
    setHideBeatLoader: (state) => {
      if (state.beatLoader > 0) state.beatLoader -= 1;
    },
  },
});

export default alertsSlice.reducer;

export const {
  setSnackbarObj,
  showLoadingBackdrop,
  hideLoadingBackdrop,
  setShowBeatLoader,
  setHideBeatLoader,
} = alertsSlice.actions;
