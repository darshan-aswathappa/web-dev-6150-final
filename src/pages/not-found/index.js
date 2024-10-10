import MainLayout from 'layout/main';
import React from 'react';
import { Container, Row, Col, Button, Form, Badge } from 'react-bootstrap';

const NotFoundPage = () => {
	return (
		<MainLayout>
			<Container className="d-flex flex-column justify-content-center align-items-center vh-100">
				<Row className="text-center">
					<Col className="d-flex flex-column justify-content-center align-items-center">
						<div
							className="mb-2"
							style={{
								position: 'relative', // Use relative positioning for centering the inner circle
								width: '100px',
								height: '100px',
								borderRadius: '50%',
								backgroundColor: 'rgba(0, 123, 255, 0.2)', // Transparent blue
							}}
						>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)', // Center the inner circle
									width: '70px',
									height: '70px',
									borderRadius: '50%',
									backgroundColor: '#007bff', // Solid blue inner circle
								}}
							></div>
						</div>
						<Badge
							bg="secondary"
							style={{
								fontSize: '0.8rem',
								padding: '5px 10px',
								letterSpacing: '0.5px',
							}}
						>
							404 Not Found
						</Badge>
						<h1>We&apos;ve lost this page</h1>
						<p className="text-muted">
							Sorry, the page you are looking for doesn&apos;t exist or has been
							moved.
						</p>
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
};

export default NotFoundPage;
