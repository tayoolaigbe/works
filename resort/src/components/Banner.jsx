import React from 'react';

const Banner = ({ children, title, subtitle }) => {
	return (
		<div className="banner">
			<h1>
				{title} <div></div>
				<p>{subtitle}</p>
				{children}
			</h1>
		</div>
	);
};

export default Banner;
