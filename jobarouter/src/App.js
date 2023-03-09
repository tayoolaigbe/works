import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Routes,
	Route,
	Link,
	NavLink,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Careers, { careersLaoder } from './pages/careers/Careers';
import NotFound from './pages/NotFound';
import CareerDetails, {
	careerDetailsLaoder,
} from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<Faq />} />
				<Route path="contact" element={<Contact />} />
			</Route>
			<Route
				path="careers"
				element={<CareersLayout />}
				errorElement={<CareersError />}
			>
				<Route loader={careersLaoder} index element={<Careers />} />
				<Route
					path=":id"
					element={<CareerDetails />}
					loader={careerDetailsLaoder}
				/>
			</Route>

			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
