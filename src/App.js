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

function App() {
    const { isCheckingAuth, checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (isCheckingAuth) return <h1>Loading....</h1>;

    return (<div>
        <Routes>
            <Route
                path='/signup'
                element={<RegistrationPage />}
            />
            <Route
                path='/login'
                element={<LoginPage />}
            />
            <Route
                path='/pricing'
                element={<Pricing />}
            />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </div>)
}

export default App;