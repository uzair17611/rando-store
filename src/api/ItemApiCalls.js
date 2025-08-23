import axiosInstance from "./axiosInstance";
import { dispatch, getState } from "../store/store";
import { setItems, addItemToList } from "../store/reducers/itemSlice";
import {
  setShowBeatLoader,
  setHideBeatLoader,
} from "../store/reducers/alertSlice";
import { handleErrorMessages, handleCatchErrors } from "../Helper/helper";

const getFormattedItem = (data) => ({
  id: data.id,
  name: data.name,
  price: Number(data.price),
  img: data.img.startsWith("http")
    ? data.img
    : `${
        import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
      }${data.img.replace("./", "/")}`,
});

export const fetchItems = async () => {
  if (getState().Item.items.length) return;
  try {
    dispatch(setShowBeatLoader());
    const response = await axiosInstance.get("/items");
    dispatch(setItems(response.data.map(getFormattedItem)));
  } catch (error) {
    handleCatchErrors(error);
  } finally {
    dispatch(setHideBeatLoader());
  }
};

const getFormattedIPayload = (data) => ({
  id: data.id,
  name: data.name?.trim() || "",
  price: Number(data.price) || 0,
  img:
    data.img?.startsWith("http") || data.img?.startsWith("data:image")
      ? data.img
      : `${
          import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
        }${data.img?.replace("./", "/")}`,
});

export const addItem = async (item) => {
  try {
    dispatch(setShowBeatLoader());
    const response = await axiosInstance.post("/items", item);
    const formatted = getFormattedIPayload(response.data);
    dispatch(addItemToList(formatted));
    return true;
  } catch (error) {
    handleCatchErrors(error);
  } finally {
    dispatch(setHideBeatLoader());
  }
};
