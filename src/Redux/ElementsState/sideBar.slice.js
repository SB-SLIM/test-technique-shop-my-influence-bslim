import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSideBarOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setSideBarOpen } = sideBarSlice.actions;
export const selectSideBar = (state) => state.sideBar;

export default sideBarSlice.reducer;
