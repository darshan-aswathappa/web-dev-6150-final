import MainLayout from 'layout/main';
import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

import 'style/RegistrationFlow/index.css';

export default function LoginPage() {
	const emailIDRef = useRef();
	const passwordRef = useRef();
	const [isChecked, setIsChecked] = useState(false);
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleCheckboxChange = e => {
		setIsChecked(e.target.checked);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!validateForm()) return;

		console.log(emailIDRef.current.value);
		console.log(passwordRef.current.value);
		console.log(isChecked);

		emailIDRef.current.value = '';
		passwordRef.current.value = '';
		setIsChecked(false);
		setErrors({});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!emailIDRef.current.value) {
			newErrors.email = 'Use email with domain @northeastern.edu';
		} else if (!isValidEmail(emailIDRef.current.value)) {
			newErrors.email = 'Invalid email format';
		}
		setErrors(newErrors);
		setIsFormValid(Object.keys(newErrors).length === 0);
		return Object.keys(newErrors).length === 0;
	};

	const isValidEmail = email => {
		const emailRegex = /^\S+@northeastern\.edu$/;
		return emailRegex.test(email);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<MainLayout>
			<Container fluid>
				<Row className="justify-content-center">
					<Col sm={8} xs={12} lg={6} className="py-4 px-5">
						<div className="left-image-container d-none d-lg-block">
							<img src="https://w0.peakpx.com/wallpaper/754/467/HD-wallpaper-cute-aesthetic-macbook-kawaii-aesthetic.jpg" />
						</div>
					</Col>
					<Col
						sm={8}
						xs={12}
						lg={6}
						className="py-4 d-flex flex-column justify-content-between"
					>
						<div className="logo-image">
							<img src="./assets/logos/windows.png" width={40} height={40} />
						</div>
						<div>
							<Row className="form-container-top-row">
								<h2>Welcome Back</h2>
								<p>Enter your email and password to access your account</p>
							</Row>
							<Row>
								<div className="login-form-container">
									<Form onSubmit={handleSubmit} className="form-container">
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Email address</Form.Label>
											<Form.Control
												className="form-control"
												type="email"
												name="email"
												placeholder="Enter email"
												ref={emailIDRef}
												onChange={validateForm}
											/>
											{errors.email && (
												<div className="error">{errors.email}</div>
											)}
										</Form.Group>
										<Form.Group className="mb-3" controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<div className="password-container position-relative">
												<Form.Control
													type={showPassword ? 'text' : 'password'}
													placeholder="Password"
													ref={passwordRef}
													style={{ width: '100%' }}
												/>
												<button
													type="button"
													className="password-toggle"
													onClick={togglePasswordVisibility}
													style={{
														position: 'absolute',
														right: '10px',
														top: '50%',
														transform: 'translateY(-50%)',
														background: 'none',
														border: 'none',
													}}
												>
													{showPassword ? (
														<EyeSlash size={20} />
													) : (
														<Eye size={20} />
													)}
												</button>
											</div>
										</Form.Group>
										<div className="mb-3">
											<p className="small">
												<a className="text-primary" href="/forgot-password">
													Forgot password?
												</a>
											</p>
										</div>
										<Form.Group className="mb-3" controlId="formBasicCheckbox">
											<Form.Check
												type="checkbox"
												label="Remember me?"
												onChange={handleCheckboxChange}
												checked={isChecked}
											/>
										</Form.Group>
										<div className="d-grid">
											<Button
												variant="dark"
												type="submit"
												disabled={!isFormValid}
											>
												Submit
											</Button>
											<Button className="mt-2" type="button" variant="light">
												<div
													id="google-button-container"
													className="flex d-flex"
												>
													<img
														className="mx-1"
														src="./assets/logos/glogo.png"
														width={25}
														height={25}
													/>
													<span className='d-none d-md-block'>Sign in with Google</span>
												</div>
											</Button>
										</div>
									</Form>
								</div>
							</Row>
						</div>
						<Row className="form-container-top-row">
							<p>
								Don&apos;t have an account?{' '}
								<span>
									<a href="/register">Sign Up</a>
								</span>
							</p>
						</Row>
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
}
