import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";
import React, { useEffect } from 'react';
import useAuthStore from "./store/authStore";
import { Navigate, Route, Routes } from "react-router-dom";
import VerifyEmail from "./pages/email-verification";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import ResumeOptions from "./pages/resume";
import ChatbotPage from "./pages/chatbot";
import IndividualPaths from "./pages/dashboard/individual";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    if (!user.isVerified) {
        return <Navigate to='/verify-email' replace />;
    }

    return children;
};

// eslint-disable-next-line react/prop-types
const RedirectAuthenticatedUser = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();

    if (isAuthenticated && user.isVerified) {
        return <Navigate to='/dashboard' replace />;
    }

    return children;
};

function App() {
    const { isCheckingAuth, checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (isCheckingAuth) return <h1>Loading....</h1>;

    return (
			<div className="font-ibm">
				<Routes>
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path="dashboard/:subjectId"
						element={
							<ProtectedRoute>
								<IndividualPaths />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/settings"
						element={
							<ProtectedRoute>
								<Settings />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/resume"
						element={
							<ProtectedRoute>
								<ResumeOptions />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/chatbot"
						element={
							<ProtectedRoute>
								<ChatbotPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/signup"
						element={
							<RedirectAuthenticatedUser>
								<RegistrationPage />
							</RedirectAuthenticatedUser>
						}
					/>
					<Route
						path="/login"
						element={
							<RedirectAuthenticatedUser>
								<LoginPage />
							</RedirectAuthenticatedUser>
						}
					/>
					<Route path="/verify-email" element={<VerifyEmail />} />
					<Route path="*" element={<Navigate to="/dashboard" replace />} />
				</Routes>
				<Toaster />
			</div>
		);
}

export default App;