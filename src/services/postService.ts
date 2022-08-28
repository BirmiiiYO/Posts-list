import { RequestDataState } from './../store/Reducers/RequestDataSlice';
import { IPost } from './../models/Post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_key}` }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], RequestDataState>({
      query: (data) => ({
        url: '/posts',
        params: {
          sortBy: data.sortBy,
          filter: data.filter,
          p: data.activePage,
          l: data.limit,
        },
      }),
      providesTags: (result) => ['Post'],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (newPost) => ({
        url: `/posts/${newPost.id}`,
        method: 'PUT',
        body: newPost,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (newPost) => ({
        url: `/posts/${newPost.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
    likePost: build.mutation<IPost, IPost>({
      query: (newLikes) => ({
        url: `/posts/${newLikes.id}`,
        method: 'PUT',
        body: newLikes,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
