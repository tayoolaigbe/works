import React from 'react';

const TimeAndLocation = () => {
	return (
		<div>
			<div className="flex items-center justify-center my-6">
				<p className="text-white text-xl font-extralight">
					Friday, 10 March 2023 | Local time: 9:28pm
				</p>
			</div>
			<div className="flex items-center justify-center my-3">
				<p className="text-white text-3xl font-medium">Edinburgh, UK</p>{' '}
			</div>
		</div>
	);
};

export default TimeAndLocation;
