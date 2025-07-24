import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import quizReducer from "./quiz";
import wishlistReducer from "./wishlist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["quiz", "wishlist"],
};

const rootReducer = combineReducers({
  quiz: quizReducer,
  wishlist: wishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);
