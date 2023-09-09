import { FaRegClock } from 'react-icons/fa';
import { MdPermContactCalendar } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

const Feature = () => {
	const features = [
		{
			icon: <MdPermContactCalendar className="w-6 h-6" />,
			title: 'Contact',
			info: ['T: 07417408385', 'info@cheriesalon.com'],
		},
		{
			icon: <FaRegClock className="w-6 h-6" />,
			title: 'Hours',
			info: ['Weekdays:  7:30 am — 1:00 am', 'Weekends: 9:00 am — 1:00 pm'],
		},
		{
			icon: <HiLocationMarker className="w-6 h-6" />,
			title: 'Location',
			info: ['175 Gorgie road', 'Edinburgh EH11 1TJ'],
		},
	];
	return (
		<section className="py-14">
			<div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
				<div className="max-w-xl space-y-3">
					<h3 className="text-white font-semibold">Features</h3>
					<p className="text-white text-3xl font-semibold sm:text-4xl">
						Do more with less complexity
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						congue, nisl eget molestie varius
					</p>
				</div>
				<div className="mt-12">
					<ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
						{features.map((item, idx) => (
							<li
								key={idx}
								className={`feature-${
									idx + 1
								} items-center space-y-3 py-8 lg:px-12 sm:py-0`}
							>
								<div className="w-12 h-12  border text-white rounded-full flex items-center justify-center">
									{item.icon}
								</div>
								<h4 className="text-lg items-center text-white font-semibold">
									{item.title}
								</h4>
								<p className=" text-white mx-auto items-center">
									{item.info?.map((info, index) => (
										<p key={index}>{info}</p>
									))}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Feature;
