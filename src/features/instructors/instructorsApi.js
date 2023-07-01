import { apiSlice } from '../api/apiSlice';
import { allInstructors, popularInstructors } from './instructorsSlice';

export const instructorsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstructors: builder.query({
      query: ({ limit }) => {
        const limitQ = limit ? `/instructors?limit=${limit}` : '/instructors';
        return {
          url: limitQ,
          method: 'GET',
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          dispatch(allInstructors(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getPopularInstructors: builder.query({
      query: ({ limit }) => {
        const limitQ = limit
          ? `/instructors?limit=${limit}`
          : '/instructors?limit=6';
        return {
          url: limitQ,
          method: 'GET',
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          dispatch(popularInstructors(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetAllInstructorsQuery, useGetPopularInstructorsQuery } =
  instructorsApi;
