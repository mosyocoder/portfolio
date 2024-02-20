import React from "react";

import "./style.css";
import bmi from "../../assets/bmiss.png";

function Portfolio() {
	return (
		<section className="portfolio" data-aos="slide-right">
			<div className="container">
				<div className="section-title">
					<h2>Portfolio</h2>
				</div>
				<div className="content">
					<div
						style={{
							backgroundImage: `url(${bmi})`,
						}}
						className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
