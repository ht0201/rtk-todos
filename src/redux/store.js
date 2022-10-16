import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from '../components/Filters/filtersSilce';

export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: [],
  },
});
