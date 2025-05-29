/*
* Creates a redux store
*/
 
import { configureStore } from '@reduxjs/toolkit';
import reportSlice from './slices/reportSlice';
import purchaseSlice from './slices/purchaseSlice';
 
export const store = configureStore({
  reducer: {
    reports: reportSlice,
    purchases: purchaseSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
 
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;