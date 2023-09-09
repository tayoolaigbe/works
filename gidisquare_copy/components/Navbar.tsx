import { NavLinks } from '@/constants';

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import AuthProviders from './AuthProviders';

const Navbar = () => {
	const session = {};
	return (
		<nav className="flexBetween navbar">
			<div className="flex-1 flexStart gap-10">
				<Link href="/">
					<Image src="/Logo-Black.svg" width={115} height={43} alt="Flex" />
				</Link>
				<ul className="xl:flex hidden text-small gap-7">
					{NavLinks.map(link => (
						<Link href={link.href} key={link.key}>
							{link.text}
						</Link>
					))}
				</ul>
			</div>
			<div className="flexCenter gap-4">
				{session ? (
					<>
						<form className="flex items-center space-x-2 border rounded-md p-2">
							<input
								className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
								type="text"
								placeholder="Search"
							/>
						</form>
						<Link href="https://www.instagram.com">
							<FaInstagram size={25} />
						</Link>
						<Link href="https://www.facebook.com">
							<FaFacebook size={25} />
						</Link>
						BusinessProfile
					</>
				) : (
					<AuthProviders />
				)}
			</div>
		</nav>
	);
};

export default Navbar;
