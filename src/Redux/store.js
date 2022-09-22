import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/index";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
