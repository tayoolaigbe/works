import React, { useState } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

const Services = () => {
	const [services, setServices] = useState([
		{
			icon: <FaCocktail />,
			title: 'Free Cocktails',
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quas!',
		},
		{
			icon: <FaHiking />,
			title: 'Endless Hiking',
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quas!',
		},
		{
			icon: <FaShuttleVan />,
			title: 'Free Shuttle',
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quas!',
		},
		{
			icon: <FaBeer />,
			title: 'Strongest Beers',
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quas!',
		},
	]);
	return (
		<section className="services">
			<Title title="services" />
			<div className="services-center">
				{services.map((service, index) => {
					return (
						<article key={`service-${index}`} className="service">
							<span>{service.icon}</span>
							<h6>{service.title}</h6>
							<p>{service.info}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
