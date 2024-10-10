import React from 'react';
import 'style/home/Video.css';

const Video = () => {
	return (
		<div className="video-section">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/wg1ydN42ukY?si=dsoC19xkUWMha0z9&clip=UgkxKJ_-bFrVGoW9E-v0S8n72fFq27xcCwMF&clipt=EPbkAxiO2gQ&autoplay=1&mute=1&loop=1&playlist=wg1ydN42ukY&controls=0&showinfo=0&modestbranding=0&rel=0&iv_load_policy=0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
			<div className="content">
				<p className="title-big">Select. Apply. Review.</p>
				<p className="title-big-colorful">With Precision AI™</p>
				<p className="title-med">
					The rollout of our new Resume Reviewer AI has begun!
				</p>
			</div>
		</div>
	);
};

export default Video;
