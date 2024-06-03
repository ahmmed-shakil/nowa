import rootred from "../reducers/main";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootred,
});

export default store;
