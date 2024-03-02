import React, { useState } from "react";

import "./style.css";
import bmi from "../../assets/bmiss.png";
import anonymous from "../../assets/anonchatss.png";
import ecom from "../../assets/ecommercess.png";
import notes from "../../assets/noteappss.png";
import vote from "../../assets/voteappss.png";
import weather from "../../assets/weather.png";

function Portfolio() {
	const [isHovered, setIsHovered] = useState(false);
	const Card = ({ imgSrc, sourceCodeLink, liveLink }) => {
		return (
			<div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<img src={imgSrc} alt="" />
				{isHovered && (
					<div className="overlay">
						<a href={sourceCodeLink} rel="noreferrer" className="source-code" target="_blank">
							Github
						</a>
						<a href={liveLink} rel="noreferrer" className="live-link" target="_blank">
							Netlify
						</a>
					</div>
				)}
			</div>
		);
	};
	return (
		<section className="portfolio" data-aos="slide-right">
			<div className="container">
				<div className="section-title">
					<h2>Portfolio</h2>
				</div>
				<div className="content">
					<Card imgSrc={bmi} sourceCodeLink="https://github.com/mosyocoder/body-mass-index" liveLink="https://mosyocoder-bmi-app.netlify.app/" />
					<Card imgSrc={anonymous} sourceCodeLink="https://github.com/mosyocoder/anonymous-chat-app" liveLink="https://mosyocoder-chat-app.netlify.app/" />
					<Card imgSrc={ecom} sourceCodeLink="https://github.com/mosyocoder/e-commerce" liveLink="https://mosyocoder-ecommerce.netlify.app/" />
					<Card imgSrc={notes} sourceCodeLink="https://github.com/mosyocoder/note-app" liveLink="https://mosyocoder-noteapp.netlify.app" />
					<Card imgSrc={vote} sourceCodeLink="https://github.com/mosyocoder/voting-app" liveLink="https://mosyocoder-vote-app.netlify.app/" />
					<Card imgSrc={weather} sourceCodeLink="https://github.com/mosyocoder/react-weather-ap" liveLink="https://mosyocoder-weatherapp.netlify.app/" />
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
