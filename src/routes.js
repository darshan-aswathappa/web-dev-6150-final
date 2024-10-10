import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "pages/not-found";
import LoginPage from "pages/login";
import RegistrationPage from "pages/registration";
import ForgotPasswordPage from "pages/forgot-password";
import HomePage from "pages/home";
import React from 'react';
import UpdatePassword from "pages/update-password";
import PaymentGateway from "pages/payment";

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/sign-in',
		element: <LoginPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/register',
		element: <RegistrationPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/update-password',
		element: <UpdatePassword />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/payment-gateway',
		element: <PaymentGateway />,
		errorElement: <NotFoundPage />,
	}
]);

export default router;
