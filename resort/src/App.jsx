import { useState } from 'react';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';

import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/rooms" element={<Rooms />} />
				<Route path="/rooms/:id" element={<SingleRoom />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
