import { Outlet } from 'react-router-dom';
import DashHeader from './DashHeader';
import DashFooter from './components/DashFooter';
import React from 'react';

const DashLayout = () => {
	return (
		<>
			<DashHeader />
			<div className="dash-container">
				<Outlet />
			</div>
			<DashFooter />
		</>
	);
};

export default DashLayout;
