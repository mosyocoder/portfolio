import React from "react";
import { TypeAnimation } from "react-type-animation";

import "./style.css";

function Hero() {
	return (
		<section className="hero">
			<div className="hero-container">
				<h1>Enes Seval</h1>
				<p>
					{"I'm  "}
					<TypeAnimation sequence={["Developer", 1000, "Freelancer", 1000, "Designer", 1000]} wrapper="span" speed={50} repeat={Infinity} />
				</p>
			</div>
		</section>
	);
}

export default Hero;
