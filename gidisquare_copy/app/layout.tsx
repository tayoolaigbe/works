import './globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';
import Story from '@/components/Story';

export const metadata = {
	title: 'gidiSquare',
	description: 'The Business Pages',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>

				<CTA />
				<Story />
				<Footer />
			</body>
		</html>
	);
}
