import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, FileText, MessageCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import useAuthStore from '../../store/authStore';

export default function MobileMenu({ isOpen, setIsOpen }) {
	const location = useLocation();
	const {logOut} = useAuthStore();

	const menuItems = [
		{ name: 'Home', icon: Home, path: '/dashboard' },
		{ name: 'Resume', icon: FileText, path: '/resume' },
		{ name: 'Chatbot', icon: MessageCircle, path: '/chatbot' },
	];

	const handleLogout = async () => {
		try {
			await logOut();
			setIsOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className='flex flex-col justify-between h-full pb-4'>
					<nav className="flex-grow mt-6">
						<ul className="flex flex-col ml-0 pl-0">
							{menuItems.map(item => (
								<li key={item.name}>
									<Link to={item.path}>
										<Button
											variant={
												location.pathname === item.path ? 'secondary' : 'ghost'
											}
											className="w-full justify-start"
											onClick={() => setIsOpen(false)}
										>
											<item.icon className="mr-2 h-4 w-4" />
											{item.name}
										</Button>
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div>
						<Button
							variant="ghost"
							className="w-full justify-start"
							onClick={() => handleLogout()}
						>
							<LogOut className="mr-2 h-4 w-4" />
							Logout
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
