import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Settings, FileText, LogOut, ActivitySquareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'; 
import useAuthStore from '../../store/authStore';

export default function Sidebar() {
    const location = useLocation();
    const [isSettingsDialogOpen, setSettingsDialogOpen] = useState(false); 
    const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false); 
    const {logOut} = useAuthStore();
	const loggedInEmail = useAuthStore((state) => state.user?.email);
	const {user} = useAuthStore();
	const navigate = useNavigate();
	
    const handleLogout = async () => {
        try {
            await logOut(); 
            setLogoutDialogOpen(false); 
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteAccount = () => {
        console.log("Trigger delete account functionality"); 
    };

    const menuItems = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'Resume', icon: FileText, path: '/resume' },
		{ name: 'About Us', icon: FileText, path: '/about' },
		{ name: 'Contact Us', icon: FileText, path: '/contact' }
    ];

    const settingsItem = { name: 'Settings', icon: Settings, path: null, onClick: () => setSettingsDialogOpen(true) };

    return (
			<div className="flex flex-col h-screen w-64 bg-white">
				<div className="flex items-center justify-center h-20">
					<h1 className="text-3xl font-bold text-gray-800">Logo</h1>
				</div>
				<nav className="flex-grow">
					<ul className="flex flex-col py-4 px-4 space-y-2">
						{menuItems.map(item => (
							<li key={item.name}>
								{item.path ? (
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
								) : (
									<Button
										variant="ghost"
										className="w-full justify-start"
										onClick={item.onClick}
									>
										<item.icon className="mr-2 h-4 w-4" />
										{item.name}
									</Button>
								)}
							</li>
						))}
					</ul>
				</nav>
				<div className="px-4 py-4">
					<Button
						variant="ghost"
						className="w-full justify-start"
						onClick={settingsItem.onClick}
					>
						<settingsItem.icon className="mr-2 h-4 w-4" />
						{settingsItem.name}
					</Button>
				</div>

				<Dialog
					open={isSettingsDialogOpen}
					onOpenChange={setSettingsDialogOpen}
				>
					<DialogContent className="flex h-[600px] w-[1000px] max-w-none">
						<div className="flex flex-col w-1/4 bg-gray-100 p-4 bg-gradient-to-br from-teal-100 to-teal-400 rounded-md">
							<Button
								variant="ghost"
								className="w-full text-left text-sm shadow-none font-bold"
							>
								<ActivitySquareIcon className="mr-2 h-4 w-4" />
								Login & Security
							</Button>
							<div className="mt-auto">
								<Button
									variant="ghost"
									className="w-full justify-start shadow-none font-bold"
									onClick={() => setLogoutDialogOpen(true)}
								>
									<LogOut className="mr-2 h-4 w-4" />
									Logout
								</Button>
							</div>
						</div>

						<div className="w-3/4 p-6">
							<h2 className="text-xl font-semibold mb-4">Login & Security</h2>
							{user.isAdmin ? (
								<div className="mb-6 flex justify-between">
									<div>
										<p className="text-black mb-1 font-semibold">Role</p>
										<p className="font-medium text-gray-500 text-sm">Admin</p>
									</div>
									<Button variant="outline" className="shadow-none" onClick={() => navigate("/admin")}>
										Navigate to Admin Dashboard
									</Button>
								</div>
							) : (
								<div className="mb-6">
									<p className="text-black mb-1 font-semibold">Role</p>
									<p className="font-medium text-gray-500 text-sm">User</p>
								</div>
							)}
							<div className="mb-6">
								<p className="text-black mb-1 font-semibold">Email</p>
								<p className="font-medium text-gray-500 text-sm">
									{loggedInEmail}
								</p>
							</div>
							<div className="flex items-center mb-6">
								<p className="flex-grow text-black font-semibold">
									Delete My Account
								</p>
								<Button variant="destructive" onClick={handleDeleteAccount}>
									Delete My Account
								</Button>
							</div>
						</div>
					</DialogContent>
				</Dialog>

				<Dialog open={isLogoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you sure you want to log out?</DialogTitle>
						</DialogHeader>
						<DialogFooter>
							<Button
								className="shadow-none"
								variant="destructive"
								onClick={() => setLogoutDialogOpen(false)}
							>
								No
							</Button>
							<Button
								variant="outline"
								className="shadow-none"
								onClick={handleLogout}
							>
								Yes
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		);
}
