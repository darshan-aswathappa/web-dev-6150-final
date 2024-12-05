import React from 'react'
import Layout from '../../layout/main'
import useAuthStore from '../../store/authStore';
import { Navigate } from 'react-router-dom';
import useFetchUsersAdminStore from '../../store/getUsersAdminStore';
import SpinnerComponent from '../../components/dashboard/loader';
import { Crown, LucideUserRound, TicketXIcon, Verified } from 'lucide-react';
import dayjs from 'dayjs';

function AdminViewAllUsersPage() {
  const {user} = useAuthStore();
  const {users, fetchingUsers, getUsers} = useFetchUsersAdminStore();

  React.useEffect(() => {
    getUsers();
  }, []);

  if (user.isAdmin === false) {
    return <Navigate to="/dashboard" replace />;
  }

  if (fetchingUsers) {
    return (
      <Layout>
        <SpinnerComponent />
      </Layout>
    );
  }

  const totalUsers = users.length;
  const totalAdmins = users.filter(user => user.isAdmin).length;
  const totalNonAdmins = totalUsers - totalAdmins;

  return (
		<Layout>
			<div>
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-2xl font-bold text-gray-800">Admin View</h1>
					<p className="text-gray-500 mt-2">
						This is the admin view all users page
					</p>
				</div>
				<div className="flex flex-wrap justify-center mt-4">
					<div className="bg-gradient-to-b from-[#020806] to-[#014b3a] shadow-md rounded-lg p-4 m-2 w-64">
						<h2 className="text-xl font-bold text-white">Total Users</h2>
						<p className="text-gray-100 text-4xl font-bold">{totalUsers}</p>
					</div>
					<div className="bg-gradient-to-b from-[#020806] to-[#014b3a] shadow-md rounded-lg p-4 m-2 w-64">
						<h2 className="text-xl font-bold text-white">Admins</h2>
						<p className="text-gray-100 text-4xl font-bold">{totalAdmins}</p>
					</div>
					<div className="bg-gradient-to-b from-[#020806] to-[#014b3a] shadow-md rounded-lg p-4 m-2 w-64">
						<h2 className="text-xl font-bold text-white">Non-Admins</h2>
						<p className="text-gray-100 text-4xl font-bold">{totalNonAdmins}</p>
					</div>
				</div>
				<div className="flex flex-col justify-center mt-4">
					{users.map(user => (
						<div
							key={user._id}
							className="bg-white shadow-md rounded-lg p-4 m-2"
						>
							<h2 className="text-xl font-bold text-gray-800 capitalize">
								{user.name}
							</h2>
							<p className="text-gray-500">{user.email}</p>
							<div className="flex flex-row space-x-2">
								<p className="text-gray-600">
									{user.isAdmin ? <Crown /> : <LucideUserRound />}
								</p>
								<p className="text-gray-600">
									{user.isVerified ? <Verified /> : <TicketXIcon />}
								</p>
							</div>
							<p className="text-gray-500">User created: {dayjs(user.createdAt).format('MMMM D, YYYY')}</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default AdminViewAllUsersPage