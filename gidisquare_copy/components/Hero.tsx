import { url } from 'inspector';
import Feature from './Feature';

const Hero = () => {
	return (
		<div className="relative bg-[url('/Hero_true-1.jpg')]">
			<div
			// className="bg-[url('/Hero_true-1.jpg')]"
			// style={{
			// 	backgroundImage: url('/Hero_true-1.jpg'),
			// 	background:
			// 		'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
			// }}
			></div>
			<div className="relative">
				<section>
					<div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
						<div className="flex-none space-y-5 max-w-xl">
							<h1 className="text-4xl text-white font-extrabold sm:text-5xl">
								Always Make Room for a Little Beauty in Your Life
							</h1>
							<p className="text-white">
								At Cherie, you'll be wowed. Book an appointment today
							</p>
							<button className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700">
								Book Appointment
							</button>
							<button className="ml-10 px-5 py-3 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700">
								View Service Menu
							</button>
						</div>
					</div>
				</section>
			</div>
			<Feature />
		</div>
	);
};

export default Hero;
