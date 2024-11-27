import React, { useState } from 'react';
import Sidebar from '../components/dashboard/sidebar';
import MobileMenu from '../components/dashboard/mobile-menu';
import Chatbot from '../components/dashboard/chatbot';

export default function Layout({ children }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div>
			<div className="flex h-screen bg-gray-100">
				<div className="hidden md:flex">
					<Sidebar />
				</div>
				<div className="md:hidden">
					<MobileMenu
						isOpen={isMobileMenuOpen}
						setIsOpen={setIsMobileMenuOpen}
					/>
				</div>
				<div className="flex-1 flex flex-col overflow-hidden">
					<header className="bg-white md:hidden">
						<div className="px-4 py-3">
							<button
								onClick={() => setIsMobileMenuOpen(true)}
								className="text-gray-500 focus:outline-none focus:text-gray-700"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</header>
					<main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
						<div className="mx-auto px-6 py-8">{children}</div>
					</main>
				</div>
				<div className="hidden xl:flex md:w-80 lg:w-96 md:flex-shrink-0">
					<Chatbot />
				</div>
			</div>
		</div>
	);
}