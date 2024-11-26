import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, FileText, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';

export default function MobileMenu({ isOpen, setIsOpen }) {
	const location = useLocation();

	const menuItems = [
		{ name: 'Home', icon: Home, path: '/dashboard' },
		{ name: 'Settings', icon: Settings, path: '/settings' },
		{ name: 'Resume', icon: FileText, path: '/resume' },
		{ name: 'Chatbot', icon: MessageCircle, path: '/chatbot' },
	];

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<nav className="flex-grow mt-6">
					<ul className="flex flex-col space-y-2">
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
			</SheetContent>
		</Sheet>
	);
}
