import { apiSlice } from '../api/apiSlice';
import { allCourses, popularCourses } from './coursesSlice';

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: ({ limit }) => {
        const limitQ = limit ? `/courses?limit=${limit}` : '/courses';
        return {
          url: limitQ,
          method: 'GET',
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          dispatch(allCourses(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getPopularCourses: builder.query({
      query: ({ limit }) => {
        const limitQ = limit ? `/courses?limit=${limit}` : '/courses?limit=6';
        return {
          url: limitQ,
          method: 'GET',
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          dispatch(popularCourses(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetAllCoursesQuery, useGetPopularCoursesQuery } = courseApi;
