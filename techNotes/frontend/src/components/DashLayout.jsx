import { Outlet } from 'react-router-dom';
import DashHeader from './DashHeader';
import React from 'react';

const DashLayout = () => {
	return (
		<>
			<DashHeader />
			<div className="dash-container">
				<Outlet />
			</div>
		</>
	);
};

export default DashLayout;
