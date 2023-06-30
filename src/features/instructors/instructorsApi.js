import { apiSlice } from '../api/apiSlice';

export const instructorsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstructors: builder.query({
      query: ({ limit }) => {
        const limitQ = limit ? `/instructors?limit=${limit}` : '/courses';
        return {
          url: limitQ,
          method: 'GET',
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          //   dispatch(allCourses(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getPopularInstructors: builder.query({
      query: ({ limit }) => {
        const limitQ = limit
          ? `/instructors?limit=${limit}`
          : '/courses?limit=6';
        return {
          url: limitQ,
          method: 'GET',
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          //   dispatch(popularCourses(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetAllInstructorsQuery, useGetPopularInstructorsQuery } =
  instructorsApi;
