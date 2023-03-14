import { useEffect, useState } from 'react';
import { useIsConnected, useSocketConnect, useSocketDisconnect } from './socket/hooks';
import { socket } from './socket';

function App() {
  const isSocketConnected = useIsConnected();
  const socketConnect = useSocketConnect();
  const socketDisconnect = useSocketDisconnect();
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    socket.on('connect', socketConnect);
    socket.on('disconnect', socketDisconnect);
    socket.on('sendMessage', (message) => {
      console.log('message');
    });

    return () => {
      socket.off('connect', socketConnect);
      socket.off('disconnect', socketDisconnect);
    };
  }, []);

  return (
    <div className="App">
      <div>{`Status: ${isSocketConnected}`}</div>
      <button onClick={() => socket.connect()}>Connect</button>
      <button onClick={() => socket.disconnect()}>Disconnect</button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          socket.timeout(5000).emit(
            'sendMessage',
            {
              message,
            },
            () => {
              console.log('DONE');
            }
          );
        }}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} name="message" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
