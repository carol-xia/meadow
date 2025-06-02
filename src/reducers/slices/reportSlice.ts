/*
 * Redux logic for manipulating the report data
 * Exports action creators that can be dispatched
 * to make changes to the report state.
*/
 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Report } from '../../types/Report';
 
export interface reportListState {
  selectedReport: string,
  reports: Report[];
}
 
const initialState: reportListState = {
  selectedReport: '',
  reports: [],
}
 
const reportSlice = createSlice({
  name: 'reportList',
  initialState,
  reducers: {
    selectReport(state, action: PayloadAction<string>) {
      console.log(`selectedReport=${JSON.stringify(action.payload)}`)
      state.selectedReport = action.payload;
    },
    addReport(state, action: PayloadAction<Report>) {
      const existingReport = state.reports.find(
        (report) => report.id === action.payload.id
      );
      if (!existingReport) {
        state.reports = [...state.reports, action.payload];
      }
    },
    removeReport(state, action: PayloadAction<Report>) {
      const filteredReportList = state.reports.filter(
        (report) => report.id !== action.payload.id
      );
      state.reports = filteredReportList;
    },
  }
});
 
export const {
  selectReport,
  addReport,
  removeReport,
} = reportSlice.actions;
export default reportSlice.reducer;