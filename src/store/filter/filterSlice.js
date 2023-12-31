import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    addFilterAction: {
    
      reducer: (state, action) => {
        state.filter = action.payload;
      },
    },
  },
});

export const { addFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
