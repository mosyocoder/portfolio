import React from "react";

import "./style.css";

function Contact() {
	return (
		<section className="contact" data-aos="slide-right">
			<div className="container">
				<div className="section-title">
					<h2>Contact</h2>
				</div>
				<div className="contact">
					<div className="form">
						<div className="form-row">
							<div className="form-group">
								<label htmlFor="name">Your Name</label>
								<input id="name" type="text" />
							</div>
							<div className="form-group">
								<label htmlFor="email">Your Email</label>
								<input id="email" type="text" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="subject">Subject</label>
							<input id="subject" type="text" />
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="" cols="30" rows="10"></textarea>
						</div>
						<div className="form-group">
							<button id="sendMessage">Send Message</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
