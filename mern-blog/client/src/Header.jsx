import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<a href="" className="logo">
				My Blog
			</a>
			<nav>
				<Link to="/login">Login</Link>
				<Link to="/register">Login</Link>
			</nav>
		</header>
	);
};

export default Header;
