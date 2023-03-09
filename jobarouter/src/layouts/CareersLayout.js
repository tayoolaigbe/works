import { Outlet } from 'react-router-dom';

export default function CareersLayout() {
	return (
		<div className="careers-layout">
			<h2>Careers</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum
				molestiae ullam odio asperiores id reprehenderit quisquam commodi minima
				eos rem porro sit, sed natus cum blanditiis sapiente ipsa illo.
			</p>

			<Outlet />
		</div>
	);
}
