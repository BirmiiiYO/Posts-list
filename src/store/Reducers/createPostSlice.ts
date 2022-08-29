import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../models/Post';

export interface createPostState {
  data: IPost;
  activeFormCreate: boolean;
  activeFormUpdate: boolean;
}

const initialState: createPostState = {
  data: {
    body: 'Add text',
    id: '',
    likes: 0,
    name: 'Add name',
    title: 'Add title',
  },
  activeFormCreate: false,
  activeFormUpdate: false,
};

export const createPostSlice = createSlice({
  name: 'requestData',
  initialState,
  reducers: {
    setActiveCreateForm(state) {
      state.activeFormCreate = !state.activeFormCreate;
    },
    setActiveUpdateForm(state) {
      state.activeFormUpdate = !state.activeFormUpdate;
    },
  },
});

export default createPostSlice.reducer;
