import axios from "axios";
import { setSnackbarObj } from "../store/reducers/alertSlice";

export const handleErrorMessages = (errors) => {
  const message =
    errors?.map?.((e) => e.message + "\n").join("") ||
    "Oops! Something went wrong.";

  dispatch(setSnackbarObj({ message, severity: "error" }));
};

export const loadFromStorage = (key, fallback = []) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearStorage = (key) => {
  localStorage.removeItem(key);
};

export const handleCatchErrors = (error) => {
  if (!axios.isCancel(error)) console.log("error", error);
};
