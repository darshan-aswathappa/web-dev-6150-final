import MainLayout from 'layout/main';
import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

import 'style/RegistrationFlow/index.css';

export default function RegistrationPage() {
	const emailIDRef = useRef();
	const passwordRef = useRef();
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const confirmPasswordIDRef = useRef();
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

		console.log(firstNameRef.current.value);
		console.log(lastNameRef.current.value);
		console.log(emailIDRef.current.value);
		console.log(passwordRef.current.value);
		console.log(confirmPasswordIDRef.current.value);
		console.log(isChecked);

		emailIDRef.current.value = '';
		passwordRef.current.value = '';
		firstNameRef.current.value = '';
		lastNameRef.current.value = '';
		confirmPasswordIDRef.current.value = '';

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

		if (!firstNameRef.current.value) {
			newErrors.firstName = 'First Name is a mandatory field';
		} else if (!isValidName(firstNameRef.current.value)) {
			newErrors.firstName = 'Invalid name format';
		}

		if (!lastNameRef.current.value) {
			newErrors.lastName = 'Last Name is a mandatory field';
		} else if (!isValidName(lastNameRef.current.value)) {
			newErrors.lastName = 'Invalid name format';
		}

		if (!confirmPasswordIDRef.current.value) {
			newErrors.confirmPassword = 'Field cannot be empty';
		} else if (
			passwordRef.current.value != confirmPasswordIDRef.current.value
		) {
			newErrors.confirmPassword = 'Password must match';
		}

		setErrors(newErrors);
		setIsFormValid(Object.keys(newErrors).length === 0);
		return Object.keys(newErrors).length === 0;
	};

	const isValidName = name => {
		const nameRegex = /^[A-Za-z]+$/;
		return nameRegex.test(name);
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
							<img src="https://i.pinimg.com/736x/a0/37/18/a03718b2f8bb93f22bc799b58ffc33de.jpg" />
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
							<Row className="registration-form-container-top-row">
								<h2>Create an account</h2>
								<p>
									Already have an account? <a href="/sign-in">Log in</a>
								</p>
							</Row>
							<Row>
								<div className="login-form-container">
									<Form onSubmit={handleSubmit} className="form-container">
										{/* First Name */}
										<Form.Group className="mb-3" controlId="formBasicFirstName">
											<Form.Label>First Name</Form.Label>
											<Form.Control
												className="form-control"
												type="text"
												name="firstName"
												placeholder="Enter First Name"
												ref={firstNameRef}
												onChange={validateForm}
											/>
											{errors.firstName && (
												<div className="error">{errors.firstName}</div>
											)}
										</Form.Group>
										{/* Last Name */}
										<Form.Group className="mb-3" controlId="formBasicLastName">
											<Form.Label>Last Name</Form.Label>
											<Form.Control
												className="form-control"
												type="text"
												name="lastName"
												placeholder="Enter Last Name"
												ref={lastNameRef}
												onChange={validateForm}
											/>
											{errors.lastName && (
												<div className="error">{errors.lastName}</div>
											)}
										</Form.Group>
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
										{/* Password */}
										<Form.Group className="mb-3" controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<div className="password-container position-relative">
												<Form.Control
													type={showPassword ? 'text' : 'password'}
													placeholder="Password"
													name="password"
													ref={passwordRef}
													style={{ width: '100%' }}
													onChange={validateForm}
												/>
												{errors.password && (
													<div className="error">{errors.password}</div>
												)}
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
										{/* Confirm Password */}
										<Form.Group
											className="mb-3"
											controlId="formBasicConfirmPassword"
										>
											<Form.Label>Confirm Password</Form.Label>
											<div className="password-container position-relative">
												<Form.Control
													type={showPassword ? 'text' : 'password'}
													name="confirmPassword"
													placeholder="Password"
													ref={confirmPasswordIDRef}
													style={{ width: '100%' }}
													onChange={validateForm}
												/>
												{errors.confirmPassword && (
													<div className="error">{errors.confirmPassword}</div>
												)}
											</div>
										</Form.Group>
										<Form.Group className="mb-3" controlId="formBasicCheckbox">
											<Form.Check
												type="checkbox"
												label="Agree to terms and conditions?"
												onChange={handleCheckboxChange}
												checked={isChecked}
											/>
										</Form.Group>
										<div className="d-grid">
											<Button
												variant="dark"
												type="submit"
												disabled={!isChecked || !isFormValid}
											>
												Submit
											</Button>
											<hr />
											<p className="text-center text-muted m-0 p-0">
												Register with
											</p>
											<div className="d-flex flex-row">
												<Button
													className="mt-2 w-100 mx-1"
													type="button"
													variant="light"
												>
													<div
														id="google-button-container"
														className="d-flex justify-content-center align-items-center"
													>
														<img
															className="mx-1"
															src="./assets/logos/glogo.png"
															width={25}
															height={25}
															alt="Google Logo"
														/>
													</div>
												</Button>
												<Button
													className="mt-2 w-100 mx-1"
													type="button"
													variant="light"
												>
													<div
														id="facebook-button-container"
														className="d-flex justify-content-center align-items-center"
													>
														<img
															className="mx-1"
															src="./assets/logos/facebook.png"
															width={25}
															height={25}
															alt="Facebook Logo"
														/>
													</div>
												</Button>
											</div>
										</div>
									</Form>
								</div>
							</Row>
						</div>
						<Row className="registration-form-container-top-row pt-3">
							<a href="/">Back to Home 🏠 ⬅️</a>
						</Row>
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
}
