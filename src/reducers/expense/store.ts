/*
* Creates a redux store
*/
 
import { configureStore } from '@reduxjs/toolkit';
import reportListSlice from './expenseSlice';
 
export const store = configureStore({
  reducer: {
    reportList: reportListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
 
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;