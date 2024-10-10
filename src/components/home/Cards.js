import React from 'react';
import 'style/home/Cards.css';
import accurate from 'assets/images/icons8-accurate-100.png';
import muscle from 'assets/images/icons8-muscle-100.png';
import developing from 'assets/images/icons8-developing-100.png';
import smart from 'assets/images/icons8-smart-100.png';

const Cards = () => {
	return (
		<div>
			<div className="additional-content">
				<p>Our Gold Digging Models</p>
				<p>Boost your career systematically</p>
			</div>

			<div className="container mt-4 mb-5">
				<div className="row">
					<div className="col-md-3 col-12 mb-3">
						<div className="" style={{ width: '100%' }}>
							<img src={accurate} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Accurate Role Selection</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
								<a href="#" className="btn btn-filled-orange">
									Find out more
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 mb-3">
						<div className="" style={{ width: '100%' }}>
							<img src={muscle} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Consolidated Résumé Craft</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
								<a href="#" className="btn btn-filled-orange">
									Find out more
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 mb-3">
						<div className="" style={{ width: '100%' }}>
							<img src={developing} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Effective Job Application</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
								<a href="#" className="btn btn-filled-orange">
									Find out more
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 mb-3">
						<div className="" style={{ width: '100%' }}>
							<img src={smart} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Smart Follow-Up Offer</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
								<a href="#" className="btn btn-filled-orange">
									Find out more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Cards;
