import React from 'react'
import Layout from '../../layout/main'
import useAuthStore from '../../store/authStore';
import { Navigate } from 'react-router-dom';

function AdminViewAllUsersPage() {
  const {user} = useAuthStore();

  if (user.isAdmin === false) {
		return <Navigate to="/dashboard" replace />;
	}

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Admin View All Users</h1>
        <p className="text-gray-500 mt-2">This is the admin view all users page</p>
      </div>
    </Layout>
  )
}

export default AdminViewAllUsersPage