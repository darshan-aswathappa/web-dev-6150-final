import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, FileText, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'; 
import useAuthStore from '../../store/authStore';

export default function Sidebar() {
    const location = useLocation();
    const [isSettingsDialogOpen, setSettingsDialogOpen] = useState(false); 
    const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false); 
    const logOut = useAuthStore((state) => state.logOut);
	const loggedInEmail = useAuthStore((state) => state.user?.email);

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
        { name: 'Settings', icon: Settings, path: null, onClick: () => setSettingsDialogOpen(true) },
        { name: 'Resume Options', icon: FileText, path: '/resume' },
    ];

    return (
        <div className="flex flex-col h-screen w-72 bg-white">
            <div className="flex items-center justify-center h-20">
                <h1 className="text-3xl font-bold text-gray-800">Logo</h1>
            </div>
            <nav className="flex-grow">
                <ul className="flex flex-col py-4 px-4">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            {item.path ? (
                                <Link to={item.path}>
                                    <Button
                                        variant={location.pathname === item.path ? 'secondary' : 'ghost'}
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

            <Dialog open={isSettingsDialogOpen} onOpenChange={setSettingsDialogOpen}>
                <DialogContent className="flex h-[600px] w-[1000px] max-w-none">
                    <div className="flex flex-col w-1/4 bg-gray-100 p-4 bg-gradient-to-br from-teal-100 to-teal-400" >
                        <Button variant="ghost" className="w-full text-left font-bold text-lg">
                            Login & Security
                        </Button>
                        <div className="mt-auto">
                            <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setLogoutDialogOpen(true)}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>
                        </div>
                    </div>

                    <div className="w-3/4 p-6">
                        <h2 className="text-xl font-semibold mb-4">Login & Security</h2>
                        <div className="mb-6">
                            <p className="text-gray-700 mb-1 font-semibold">Email</p>
                            <p className="font-medium">{loggedInEmail}</p>
                        </div>
                        <div className="flex items-center mb-6">
                            <p className="flex-grow text-gray-700 font-semibold">Delete My Account</p>
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
                        <Button className = "bg-gradient-to-br from-teal-100 to-teal-400"variant="ghost" onClick={() => setLogoutDialogOpen(false)}>
                            No
                        </Button>
                        <Button variant="secondary" onClick={handleLogout}>
                            Yes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
