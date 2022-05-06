import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./color";

const store = configureStore({
  reducer: colorSlice.reducer,
});

export default store;
