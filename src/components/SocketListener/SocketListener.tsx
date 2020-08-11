import React from 'react';
import socketIOClient from 'socket.io-client';
const ROOT_URL = 'http://localhost:4001';
export const socket = socketIOClient(ROOT_URL);

const SocketListener: React.FC = ({ children }) => {
  React.useEffect((): any => {
    socket.on('JoinRoomWelcome', (msg: string) =>
      console.log('JoinRoomWelcome', msg)
    );
    // socket.on("UpdateConnected", (data) =>
    //   console.log("update connected", data)
    // )
    socket.on('PickMade', (pick: DraftSelection) =>
      console.log('pick made', pick)
    );
    return () => socket.disconnect();
  }, []);

  return <div>{children}</div>;
};

export default SocketListener;
