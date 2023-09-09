'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
// 	return (
// 		<footer className="flex justify-around items-center bg-light-white">
// 			<div className="flex flex-wrap">
// 				<Link href="/">
// 					<Image src="/Logo-Black.svg" width={120} height={38} alt="flex" />
// 				</Link>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

const Footer = () => {
	const footerNavs = [
		{
			label: 'Company',
			items: [
				{
					href: 'javascript:void()',
					name: 'Service menu',
				},
				{
					href: 'javascript:void()',
					name: 'Our Story',
				},
				{
					href: 'javascript:void()',
					name: 'Contact',
				},
				{
					href: 'javascript:void()',
					name: 'Others',
				},
			],
		},
	];

	return (
		<footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
			<div className="gap-6 justify-between md:flex">
				<div className="flex-1">
					<div className="max-w-xs">
						{/* <img src="https://www.floatui.com/logo.svg" className="w-32" /> */}
						<Link href="/">
							<Image
								className="w-32"
								src="/Logo-Black.svg"
								width={120}
								height={38}
								alt="flex"
							/>
						</Link>
						<p className="leading-relaxed mt-2 text-[15px]">
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s.
						</p>
					</div>
					<form onSubmit={e => e.preventDefault()}>
						<label className="block pt-4 pb-2">Stay up to date</label>
						<div className="max-w-sm flex items-center border rounded-md p-1">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full p-2.5 outline-none"
							/>
							<button className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md hover:bg-indigo-500 focus:shadow-none sm:px-5">
								Subscribe
							</button>
						</div>
					</form>
				</div>
				<div className="flex-3 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
					{footerNavs.map((item, idx) => (
						<ul className="space-y-4" key={idx}>
							<h4 className="text-gray-800 font-medium">{item.label}</h4>
							{item.items.map((el, idx) => (
								<li key={idx}>
									<a
										href={el.href}
										className="hover:underline hover:text-indigo-600"
									>
										{el.name}
									</a>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
			<div className="mt-8 py-6 border-t items-center justify-between sm:flex">
				<div className="mt-4 sm:mt-0">
					&copy; 2023 Cherie. All rights reserved.
				</div>
				<div className="mt-6 sm:mt-0">
					<ul className="flex items-center space-x-4">
						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<Link href="https://www.facebook.com">
								<FaFacebook size={25} />
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com">
								<FaInstagram size={25} />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<style jsx>{`
				.svg-icon path,
				.svg-icon polygon,
				.svg-icon rect {
					fill: currentColor;
				}
			`}</style>
		</footer>
	);
};

export default Footer;
