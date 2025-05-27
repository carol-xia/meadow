/*
 * Redux logic for manipulating the report data
 * Exports action creators that can be dispatched
 * to make changes to the report state.
*/
 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Report } from '../../types/Report';
 
export interface reportListState {
  reports: Report[];
}
 
const initialState: reportListState = {
  reports: [],
}
 
const expenseSlice = createSlice({
  name: 'reportList',
  initialState,
  reducers: {
    addReportToList(state, action: PayloadAction<Report>) {
      const existingReport = state.reports.find(
        (report) => report.id === action.payload.id
      );
      if (!existingReport) {
        state.reports = [...state.reports, action.payload];
      }
    },
    removeReportFromList(state, action: PayloadAction<Report>) {
      const filteredReportList = state.reports.filter(
        (report) => report.id !== action.payload.id
      );
      state.reports = filteredReportList;
    },
    updatePurchases(state, action: PayloadAction<Report>) {
      const index = state.reports.findIndex(
        (report) => report.id === action.payload.id
      );
      const newArray = [...state.reports];
      newArray[index].purchases = action.payload.purchases;
      state.reports = newArray;
    }
  }
});
 
export const {
  addReportToList,
  removeReportFromList,
  updatePurchases,
} = expenseSlice.actions;
export default expenseSlice.reducer;