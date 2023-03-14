import { createSlice } from '@reduxjs/toolkit';

export interface SocketState {
  isConnected: boolean;
}

const initialState: SocketState = {
  isConnected: false,
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connect: (state: SocketState) => {
      state.isConnected = true;
    },
    disconnect: (state: SocketState) => {
      state.isConnected = false;
    },
  },
});

export const socketReducer = socketSlice.reducer;
export const socketActions = socketSlice.actions;

export default socketReducer;