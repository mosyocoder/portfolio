import React from "react";

import "./style.css";
import avatar from "../../assets/enes_avatar.jpg";

function Navigation() {
	return (
		<div>
			<div className="header">
				<div>
					<img src={avatar} alt="" />
					<h1>Enes Seval</h1>
					<div className="social-links">
						<a href="https://twitter.com/mosyocoder" target="_blank" rel="noopener noreferrer">
							<i class="fa-brands fa-x-twitter"></i>
						</a>
						<a href="https://www.instagram.com/mosyocoder/" target="_blank" rel="noopener noreferrer">
							<i class="fa-brands fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/in/enes-seval-162679230/" target="_blank" rel="noopener noreferrer">
							<i class="fa-brands fa-linkedin-in"></i>
						</a>
						<a href="https://github.com/mosyocoder" target="_blank" rel="noopener noreferrer">
							<i class="fa-brands fa-github"></i>
						</a>
					</div>
				</div>
				<div className="nav-menu">
					<ul>
						<li>
							<a href="/" className="active">
								<i class="fa-solid fa-house fa-2x"></i>
								<span>Home</span>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="fa-solid fa-user fa-2x"></i>
								<span>About</span>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="fa-solid fa-file-code fa-2x"></i>
								<span>Portfolio</span>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="fa-solid fa-envelope fa-2x"></i>
								<span>Contact</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer">
				<div class="container">
					<div class="copyright">
						&copy; Copyright{" "}
						<strong>
							<span>Mösyö Coder</span>
						</strong>
					</div>
					<div class="credits">
						Designed by <a href="/">Mösyö Coder</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
