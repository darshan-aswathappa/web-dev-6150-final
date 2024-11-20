import NotFoundPage from "pages/not-found";
import LoginPage from "pages/login";
import RegistrationPage from "pages/registration";
import ForgotPasswordPage from "pages/forgot-password";
import HomePage from "pages/home";
import React, { useEffect } from 'react';
import UpdatePassword from "pages/update-password";
import PaymentGateway from "pages/payment";
import Pricing from "pages/pricing";
import HomePageV2 from "pages/home-v2";
import useAuthStore from "store/authStore";
import { Navigate, Route, Routes } from "react-router-dom";
import VerifyEmail from "pages/email-verification";
import { Toaster } from "react-hot-toast";
import Dashboard from "pages/dashboard";

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

    return (<div>
        <Routes>
            <Route
                path='/dashboard'
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path='/signup'
                element={
                <RedirectAuthenticatedUser>
                        <RegistrationPage />
                </RedirectAuthenticatedUser>
                }
            />
            <Route
                path='/login'
                element={
                    <RedirectAuthenticatedUser>
                        <LoginPage />
                    </RedirectAuthenticatedUser>
                }
            />
            <Route
                path='/pricing'
                element={<Pricing />}
            />
            <Route
                path="/verify-email"
                element={<VerifyEmail />}
            />
            <Route
                path="/"
                element={<HomePageV2 />}
            />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Toaster />
    </div>)
}

export default App;