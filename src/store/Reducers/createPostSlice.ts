import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../models/Post';

export interface createPostState {
  data: IPost;
  activeForm: boolean;
}

const initialState: createPostState = {
  data: {
    body: 'Add text',
    id: '',
    likes: 0,
    name: 'Add name',
    title: 'Add title',
  },
  activeForm: false,
};

export const createPostSlice = createSlice({
  name: 'requestData',
  initialState,
  reducers: {
    setActiveForm(state) {
      state.activeForm = !state.activeForm;
    },
  },
});

export default createPostSlice.reducer;
