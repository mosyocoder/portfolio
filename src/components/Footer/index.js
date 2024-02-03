import React from "react";

import "./style.css";

function Footer() {
	return (
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
	);
}

export default Footer;
