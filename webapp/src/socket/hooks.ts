import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { socketActions } from './slice';

export function useIsConnected() {
  return useSelector((state: RootState) => state.socket.isConnected);
}

export function useSocketConnect() {
  const dispatch = useDispatch();
  return () => {
    dispatch(socketActions.connect());
  };
}

export function useSocketDisconnect() {
  const dispatch = useDispatch();
  return () => {
    dispatch(socketActions.disconnect());
  };
}