import React, { useState } from "react";

import "./style.css";
import avatar from "../../assets/enes_avatar.jpg";
import Hero from "../Hero";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

function Navigation() {
	const [toggle, setToggle] = useState(true);

	const [activeNav, setActiveNav] = useState(0);

	const toggleButton = () => {
		setToggle(!toggle);
		if (toggle) document.body.classList.add("ovfhidden");
		else document.body.classList.remove("ovfhidden");
	};

	const sections = document.getElementsByTagName("section");

	window.addEventListener("scroll", () => {
		let cur_pos = window.scrollY + 200;

		for (let i = 0; i < sections.length; i++) {
			let top = sections[i].offsetTop;
			let bottom = sections[i].offsetTop + sections[i].offsetHeight;

			if (cur_pos >= top && cur_pos <= bottom) setActiveNav(i);
		}
	});

	return (
		<div>
			<button className="mobile-nav-toggle" onClick={() => toggleButton()}>
				<i className={toggle ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
			</button>
			<div className={`header ${toggle}`}>
				<div>
					<img src={avatar} alt="" />
					<h1>Enes Seval</h1>
					<div className="social-links">
						<a href="https://twitter.com/mosyocoder" target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-x-twitter"></i>
						</a>
						<a href="https://www.instagram.com/mosyocoder/" target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/in/enes-seval-162679230/" target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
						<a href="https://github.com/mosyocoder" target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-github"></i>
						</a>
					</div>
				</div>
				<div className="nav-menu">
					<ul>
						<li>
							<a href="/" className={activeNav === 0 ? "active" : ""}>
								<i className="fa-solid fa-house fa-2x"></i>
								<span>Home</span>
							</a>
						</li>
						<li>
							<a href="/" className={activeNav === 1 ? "active" : ""}>
								<i className="fa-solid fa-user fa-2x"></i>
								<span>About</span>
							</a>
						</li>
						<li>
							<a href="/" className={activeNav === 2 ? "active" : ""}>
								<i className="fa-solid fa-file-code fa-2x"></i>
								<span>Portfolio</span>
							</a>
						</li>
						<li>
							<a href="/" className={activeNav === 3 ? "active" : ""}>
								<i className="fa-solid fa-envelope fa-2x"></i>
								<span>Contact</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<Hero />
			<About />
			<Portfolio />
			<Contact />
			<div className="footer">
				<div className="container">
					<div className="copyright">
						&copy; Copyright{" "}
						<strong>
							<span>Mösyö Coder</span>
						</strong>
					</div>
					<div className="credits">
						Designed by <a href="/">Mösyö Coder</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
