import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/index";
import sideBarReducer from "./ElementsState";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    sideBar: sideBarReducer,
  },
});

export default store;
