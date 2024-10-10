import React from 'react';
import 'style/home/NavBar.css';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Vérifier de Résumé
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="navbar-nav me-auto mb-2 mb-lg-0 d-md-flex justify-content-md-between w-100">
						<div className='flex d-md-flex'>
							<a className="nav-link me-2" aria-current="page" href="/">
								Home
							</a>
							<a className="nav-link" aria-current="page" href="/pricing">
								Pricing
							</a>
						</div>
						<a className="nav-link" aria-current="page" href="/register">
							Register 🚀
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
