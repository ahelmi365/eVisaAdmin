import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage/session";

// slices
import authSlice from "./slices/authSlice"
import allRequestDetailsSlice from "./slices/allRequestDetailsSlice"

const rootReducer = combineReducers({
    adminAuth: authSlice,
    allRequestDetails: allRequestDetailsSlice,
});

const persistConfig = {
  key: "root-evisa-admin",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // When using Redux Persist without using the Thunk middleware,
  // we‘d get an error in the browser’s console "reading a non-serializable value was detected in the state".
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>;
