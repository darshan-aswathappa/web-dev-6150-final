import React from "react";

export default function Footer() {
  return (
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2">
				<p className="col-md-4 mb-0 text-body-secondary">
					&copy; 2024 Resume Reviewer
				</p>

				<a
					href="/"
					className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
				>
					<img src="./assets/logos/windows.png" className="bi me-w" width={40} height={40} />
				</a>

				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<a href="/" className="nav-link px-2 text-body-secondary">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="/" className="nav-link px-2 text-body-secondary">
							FAQs
						</a>
					</li>
					<li className="nav-item">
						<a href="/" className="nav-link px-2 text-body-secondary">
							About
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}
