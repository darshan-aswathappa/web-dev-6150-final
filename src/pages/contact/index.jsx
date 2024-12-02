import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Contact() {
	const [message, setMessage] = useState('');
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});
	const [showNotification, setShowNotification] = useState(false);

	const validateForm = () => {
		const newErrors = {};
		const { firstName, lastName, email, message } = formData;

		if (/[\d]/.test(firstName)) {
			newErrors.firstName = 'First name should not contain numbers.';
		}

		if (/[\d]/.test(lastName)) {
			newErrors.lastName = 'Last name should not contain numbers.';
		}

		if (!email.endsWith('@northeastern.edu')) {
			newErrors.email = 'Please use a valid @northeastern.edu email address.';
		}

		// Validate message length
		if (message.length < 5) {
			newErrors.message = 'Message should be at least 5 characters long.';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (validateForm()) {
			setMessage('Thank you for your query, we will get back to you soon');
			setShowNotification(true);
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				message: '',
			});
		}
	};

	useEffect(() => {
		if (showNotification) {
			setTimeout(() => {
				setShowNotification(false);
			}, 3000);
		}
	}, [showNotification]);

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="bg-gradient-to-r from-black to-teal-300 min-h-screen flex flex-col items-center">
			<nav className="w-full py-4 ">
				<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
					<a
						href="/dashboard"
						className="text-3xl flex font-normal mb-0 text-white no-underline"
					>
						<GraduationCap className="mr-2 w-8 h-8 opacity-80" />
						CourseCraft
					</a>
				</div>
			</nav>
			<div className="max-w-7xl mx-auto px-4 w-full">
				<div className="flex flex-col lg:flex-row gap-10">
					<div className="w-full lg:w-1/2 space-y-6">
						<h1 className="text-5xl font-semibold mt-6 text-white">Contact Us</h1>
						<p className="text-lg text-white">
							We would love to hear from you! If you have any questions or
							feedback, please reach out to us. We strive to respond as quickly
							as possible.
						</p>
						<div>
							<label
								htmlFor="email"
								className="text-lg font-medium text-white"
							>
								Email:
							</label>
							<a
								href="mailto:huns.n@northeastern.edu"
								className="text-lg font-medium text-black hover:underline block text-white"
							>
								huns.n@northeastern.edu
							</a>
						</div>
					</div>

					<div className="w-full lg:w-1/2 space-y-6 bg-grey mt-2">
						<form
							onSubmit={handleSubmit}
							className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md mt-0"
						>
							<div>
								<label
									htmlFor="first-name"
									className="text-lg font-medium text-gray-700"
								>
									First Name
								</label>
								<input
									type="text"
									id="first-name"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									className="w-full p-3 mt-2 border border-gray-300 rounded-md"
									placeholder="John"
									required
								/>
								{errors.firstName && (
									<p className="text-red-500 text-sm">{errors.firstName}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="last-name"
									className="text-lg font-medium text-gray-700"
								>
									Last Name
								</label>
								<input
									type="text"
									id="last-name"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									className="w-full p-3 mt-2 border border-gray-300 rounded-md"
									placeholder="Doe"
									required
								/>
								{errors.lastName && (
									<p className="text-red-500 text-sm">{errors.lastName}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="email"
									className="text-lg font-medium text-gray-700"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full p-3 mt-2 border border-gray-300 rounded-md"
									placeholder="john.doe@northeastern.edu"
									required
								/>
								{errors.email && (
									<p className="text-red-500 text-sm">{errors.email}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="message"
									className="text-lg font-medium text-gray-700"
								>
									How can we help?
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									className="w-full p-3 mt-2 border border-gray-300 rounded-md"
									placeholder="Write your message here..."
									required
								></textarea>
								{errors.message && (
									<p className="text-red-500 text-sm">{errors.message}</p>
								)}
							</div>

							<button
								type="submit"
								className="w-full bg-black text-white p-3 rounded-3xl font-semibold hover:bg-blue-600"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>

			{showNotification && (
				<div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-4 rounded-lg shadow-lg">
					{message}
				</div>
			)}
		</div>
	);
}
