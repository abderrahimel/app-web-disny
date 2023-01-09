import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    // key(is the value of the name ) and value is the reducer
    // define movie in store
    movie: movieReducer,
    user: userReducer
  },
});
