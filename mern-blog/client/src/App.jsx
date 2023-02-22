import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Post from './Post';

function App() {
	return (
		<Routes>
			<Route
				index
				element={
					<main>
						<Header />

						<Post />
						<Post />
						<Post />
					</main>
				}
			/>
			<Route path="/login" element={<div>Login to yours</div>} />
		</Routes>
	);
}

export default App;
