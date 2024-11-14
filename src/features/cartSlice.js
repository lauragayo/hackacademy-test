import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => { // accion
      state.items.push(action.payload); 
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload); 
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
