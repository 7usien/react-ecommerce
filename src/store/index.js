import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./categoryReducer";
import items from "./productReducer";
import cart from "./cartReducer";

import {
 persistStore,
 persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
 key: "ecom",
 version: 1,
 storage,
 whiteList: ["cart"],
};

const rootReducer = combineReducers({  cart, categories, items });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
