import { useState } from 'react';
import socketIOClient from 'socket.io-client';


const useSocket = (domain, token) => {
	const [socket,] = useState(socketIOClient(domain, {extraHeaders: token}));

	return socket;
}

export default useSocket;
