import { useState } from 'react';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/rooms" element={<Rooms />} />
				<Route path="/single-room" element={<SingleRoom />} />
			</Routes>
		</>
	);
}

export default App;
