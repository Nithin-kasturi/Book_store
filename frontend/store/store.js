import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartSlice,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
