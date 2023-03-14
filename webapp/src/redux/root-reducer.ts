import { combineReducers } from '@reduxjs/toolkit';
import socketReducer from '../socket/slice';

const rootReducer = combineReducers({
  socket: socketReducer,
});

export default rootReducer;
