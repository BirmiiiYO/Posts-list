import { RequestDataState } from './../store/Reducers/RequestDataSlice';
import { IPost } from './../models/Post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_key}` }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], RequestDataState>({
      query: (data) => ({
        url: '/posts',
        params: {
          sortBy: data.sortBy,
          filter: data.filter,
          p: data.activePage,
          l: 100,
        },
      }),
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});
