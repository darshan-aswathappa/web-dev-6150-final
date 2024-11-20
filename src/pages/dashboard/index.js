import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuthStore from 'store/authStore';

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
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
