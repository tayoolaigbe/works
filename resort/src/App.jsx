import { useState } from 'react';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';

function App() {
	return (
		<>
			<Home />
			<Rooms />
			<SingleRoom />
			<Error />
		</>
	);
}

export default App;
