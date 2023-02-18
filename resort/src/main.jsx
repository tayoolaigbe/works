import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RoomProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<RoomProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</RoomProvider>
);
