import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCourses: undefined,
  popularCourses: undefined,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    allCourses: (state, action) => {
      state.allCourses = action.payload;
    },
    popularCourses: (state, action) => {
      state.popularCourses = action.payload;
    },
  },
});

export const { allCourses, popularCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
