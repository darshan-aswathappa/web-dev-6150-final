import React from 'react';
import 'style/home/Carousel.css';
import resume1 from 'assets/images/resume1.png';
import resume2 from 'assets/images/resume2.png';
import resume3 from 'assets/images/resume3.png';

const Carousel = () => {
	return (
		<div>
			<div className="additional-content">
				<p>Our Résumé Samples</p>
				<p>Fit all professional roles</p>
			</div>

			<div id="carouselExample" className="carousel slide mt-5">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={resume1}
							className="d-block mx-auto"
							alt="Professional Business Résumé"
						/>
						<h3>Professional Business Résumé</h3>
					</div>
					<div className="carousel-item">
						<img
							src={resume2}
							className="d-block mx-auto"
							alt="Max Potential Starter Résumé"
						/>
						<h3>Max Potential Starter Résumé</h3>
					</div>
					<div className="carousel-item">
						<img
							src={resume3}
							className="d-block mx-auto"
							alt="Centered Balanced Résumé"
						/>
						<h3>Centered Balanced Résumé</h3>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
