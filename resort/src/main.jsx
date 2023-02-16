import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { RoomProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RoomProvider>
			<Router>
				<App />
			</Router>
		</RoomProvider>
	</React.StrictMode>
);
