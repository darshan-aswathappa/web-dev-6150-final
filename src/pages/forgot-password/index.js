import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import MainLayout from 'layout/main';
import { useNavigate } from 'react-router-dom';

import 'style/RegistrationFlow/index.css';

export default function ForgotPasswordPage() {
	const emailRef = useRef();
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (email) => {
		const params = new URLSearchParams({ email }).toString();
		navigate(`/update-password?${params}`);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!validateForm()) return;
    handleNavigation(emailRef.current.value);
		emailRef.current.value = '';
		setErrors({});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!emailRef.current.value) {
			newErrors.email = 'Email is required.';
		} else if (!isValidEmail(emailRef.current.value)) {
			newErrors.email = 'Invalid email format.';
		}

		setErrors(newErrors);
		setIsFormValid(Object.keys(newErrors).length === 0);
		return Object.keys(newErrors).length === 0;
	};

	const isValidEmail = email => {
		const emailRegex = /^\S+@\S+\.\S+$/;
		return emailRegex.test(email);
	};

	return (
		<MainLayout>
			<Container fluid>
				<Row className="justify-content-center">
					<Col sm={8} xs={12} lg={5} className="py-4 px-5">
						<div className="text-center">
							<h2>Reset your password</h2>
							<p>
								Forgot your password? Please enter your email to receive password reset link.
							</p>
						</div>
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									ref={emailRef}
									onChange={validateForm}
								/>
								{errors.email && <div className="error">{errors.email}</div>}
							</Form.Group>
							<div className="d-grid">
								<Button variant="primary" type="submit" disabled={!isFormValid}>
									Submit
								</Button>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
}
