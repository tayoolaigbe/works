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
		</Routes>
	);
}

export default App;
