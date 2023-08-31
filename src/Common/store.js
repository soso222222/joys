import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import menuSlice from "../features/menu/menuSlice";

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["risk"],
    // blacklist: [],
};

const reducers = combineReducers({
    menu: menuSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
});
