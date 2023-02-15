// import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// export default class Navbar extends Component {
// 	render() {
// 		return <div>Hello from Navbar</div>;
// 	}
// }

import React, { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(isOpen => !isOpen);
	};
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={logo} alt="beach-resort-log" />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
