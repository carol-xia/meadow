/*
 * Redux logic for manipulating the purchase data
 * Exports action creators that can be dispatched
 * to make changes to the purchase state.
*/
 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Purchase } from '../../types/Report';
 
export interface purchaseListState {
  purchases: Purchase[];
}
 
const initialState: purchaseListState = {
  purchases: [],
}
 
const purchaseSlice = createSlice({
  name: 'purchaseList',
  initialState,
  reducers: {
    addPurchase(state, action: PayloadAction<Purchase>) {
      const existingPurchase = state.purchases.find(
        (purchase) => purchase.id === action.payload.id
      );
      if (!existingPurchase) {
        state.purchases = [...state.purchases, action.payload];
      }
    },
    updatePurchase(state, action: PayloadAction<Purchase>) {
      const index = state.purchases.findIndex(
        (purchase) => purchase.id === action.payload.id
      );
      const newArray = [...state.purchases];
      newArray[index] = action.payload;
      state.purchases = newArray;
    },
    deletePurchase(state, action: PayloadAction<string>) {
      const filteredPurchaseList = state.purchases.filter(
        (purchase) => purchase.id !== action.payload
      );
      state.purchases = filteredPurchaseList;
    },
  }
});
 
export const {
  addPurchase,
  updatePurchase,
  deletePurchase,
} = purchaseSlice.actions;
export default purchaseSlice.reducer;