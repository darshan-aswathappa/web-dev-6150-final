import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import MainLayout from 'layout/main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

import 'style/RegistrationFlow/index.css';

export default function UpdatePassword() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const email = queryParams.get('email');
    // const navigate = useNavigate();
	const notify = () => toast(`Password successfully updated for ${email}!`);

	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (!validateForm()) return;
		passwordRef.current.value = '';
		confirmPasswordRef.current.value = '';
		setErrors({});
		notify();
        // navigate('/sign-in');
	};

	const validateForm = () => {
		let newErrors = {};
		if (!passwordRef.current.value || !confirmPasswordRef.current.value) {
			newErrors.password = 'Password is required.';
		} else if (passwordRef.current.value != confirmPasswordRef.current.value) {
			newErrors.password = 'Passwords must match';
		}

		setErrors(newErrors);
		setIsFormValid(Object.keys(newErrors).length === 0);
		return Object.keys(newErrors).length === 0;
	};

	return (
		<MainLayout>
			<Container fluid>
				<Row className="justify-content-center">
					<Col sm={8} xs={12} lg={5} className="py-4 px-5">
						<div className="text-center">
							<h2>Create a new password</h2>
							<p>Please choose a password that hasn&apos;t been used before.</p>
						</div>
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Set new password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Set new password"
									ref={passwordRef}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
								<Form.Label>Confirm new password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Confirm new password"
									ref={confirmPasswordRef}
									onChange={validateForm}
								/>
								{errors.password && (
									<div className="error">{errors.password}</div>
								)}
							</Form.Group>
							<div className="d-grid">
								<Button variant="primary" type="submit" disabled={!isFormValid}>
									Reset Password
								</Button>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				rtl={false}
				theme="dark"
			/>
		</MainLayout>
	);
}
