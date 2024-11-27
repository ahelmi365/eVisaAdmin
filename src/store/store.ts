import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  //   adminAuth: adminAuthSlice,
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
