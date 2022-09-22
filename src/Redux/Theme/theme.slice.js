import { createSlice } from "@reduxjs/toolkit";
import {
  getFromLocalStorage,
  addToLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  themeMode: getFromLocalStorage("theme-mode") || "light",
};

const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setModeTheme: (state) => {
      const newTheme = state.themeMode === "light" ? "dark" : "light";
      state.themeMode = newTheme;
      addToLocalStorage("theme-mode", newTheme);
    },
  },
});

export const { setModeTheme } = themeModeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeModeSlice.reducer;
