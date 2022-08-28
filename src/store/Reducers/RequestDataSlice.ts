import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RequestDataState {
  sortBy: 'name' | 'title' | 'likes' | '';
  filter: string;
  activePage: number;
  limit: number;
}

const initialState: RequestDataState = {
  sortBy: '',
  filter: '',
  activePage: 1,
  limit: 10,
};

export const requestDataSlice = createSlice({
  name: 'requestData',
  initialState,
  reducers: {
    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload;
    },
    setActiveSortBy(state, action: PayloadAction<'name' | 'title' | 'likes'>) {
      state.sortBy = action.payload;
    },
  },
});

export default requestDataSlice.reducer;
