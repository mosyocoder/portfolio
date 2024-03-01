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
							Kaynak Kodu
						</a>
						<a href={liveLink} rel="noreferrer" className="live-link" target="_blank">
							Canlı Link
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
					<Card imgSrc={bmi} sourceCodeLink="#" liveLink="#" />
					<Card imgSrc={anonymous} sourceCodeLink="#" liveLink="#" />
					<Card imgSrc={ecom} sourceCodeLink="#" liveLink="#" />
					<Card imgSrc={notes} sourceCodeLink="#" liveLink="#" />
					<Card imgSrc={vote} sourceCodeLink="#" liveLink="#" />
					<Card imgSrc={weather} sourceCodeLink="#" liveLink="#" />
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
