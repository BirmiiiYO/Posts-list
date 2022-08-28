import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { postAPI } from '../services/postService';
import requestDataReducer from './Reducers/RequestDataSlice';
import createPostReducer from './Reducers/createPostSlice';

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
  requestDataReducer,
  createPostReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
