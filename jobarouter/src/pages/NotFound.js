import { Link } from 'react-router-dom';
export default function NotFound() {
	return (
		<div>
			<h2>Page Not Found</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				necessitatibus nisi quas consequatur explicabo eos corrupti, quidem odio
				placeat adipisci vero veritatis enim, architecto molestias, velit illum
				sint voluptatibus maxime!
			</p>{' '}
			<p>
				Go to the <Link to="/">Homepage.</Link>
			</p>
		</div>
	);
}
