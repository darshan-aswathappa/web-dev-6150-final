import React from 'react';

export default function HeroCard() {
	return (
		<div className="container my-5">
			<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
				<div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
					<h1 className="display-4 fw-bold lh-1 text-body-emphasis">
						Resume Reviewer: AI-Powered Resume Reviewer
					</h1>
					<p className="lead">
						Boost your career prospects with ResumePro, an AI-powered resume
						reviewer designed to help you stand out. Upload your resume and get
						instant, personalized feedback on structure, clarity, keywords, and
						more. Whether you&apos;re a job seeker or a professional looking to
						refine your resume, ResumePro ensures your skills and experience
						shine in front of recruiters.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
						<button
							type="button"
							className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
						>
							<a
								className="text-decoration-none text-white"
								aria-current="page"
								href="/register"
							>
								Register
							</a>
						</button>
						<button
							type="button"
							className="btn btn-outline-secondary btn-lg px-4"
						>
							<a
								className="text-decoration-none link-dark"
								aria-current="page"
								href="/sign-in"
							>
								Login
							</a>
						</button>
					</div>
				</div>
				<div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
					<img
						className="rounded-lg-3"
						src="./assets/ai-image.webp"
						alt=""
						width="720"
					/>
				</div>
			</div>
		</div>
	);
}
