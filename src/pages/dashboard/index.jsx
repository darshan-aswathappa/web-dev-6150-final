import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/store/authStore';
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const { error, isLoading, logOut } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logOut();
    navigate("/")
  }
  return (
		<div>
			<h1>Dashboard</h1>
			<Button onClick={handleLogout}>Logout</Button>
		</div>
	);
}
