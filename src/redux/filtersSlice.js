import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducer: {},
});

export const filtersReducer = filtersSlice.reducer;
