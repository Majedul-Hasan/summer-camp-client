import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allInstructors: undefined,
  popularInstructors: undefined,
};

const InstructorsSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {
    allInstructors: (state, action) => {
      state.allInstructors = action.payload;
    },
    popularInstructors: (state, action) => {
      state.popularInstructors = action.payload;
    },
  },
});

export const { allInstructors, popularInstructors } = InstructorsSlice.actions;
export default InstructorsSlice.reducer;
