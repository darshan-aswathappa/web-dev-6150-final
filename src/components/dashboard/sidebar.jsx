import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
	const location = useLocation();

	const menuItems = [
		{ name: 'Home', icon: Home, path: '/dashboard' },
		{ name: 'Settings', icon: Settings, path: '/settings' },
		{ name: 'Resume', icon: FileText, path: '/resume' },
	];

	return (
		<div className="flex flex-col w-72 bg-white">
			<div className="flex items-center justify-center h-20">
				<h1 className="text-3xl font-bold text-gray-800">Logo</h1>
			</div>
			<nav className="flex-grow">
				<ul className="flex flex-col py-4 px-4">
					{menuItems.map(item => (
						<li key={item.name}>
							<Link to={item.path}>
								<Button
									variant={
										location.pathname === item.path ? 'secondary' : 'ghost'
									}
									className="w-full justify-start"
								>
									<item.icon className="mr-2 h-4 w-4" />
									{item.name}
								</Button>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
