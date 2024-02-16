import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './itemsSlice';
import { filtersReducer } from './filtersSlice';

export const initialState = {
  contacts: {
    items: [],
  },

  filters: {
    name: '',
  },
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
