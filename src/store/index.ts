import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./slices/cocktailsSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});

export default store;
