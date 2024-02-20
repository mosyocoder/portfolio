import { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";

function App() {
	useEffect(() => {
		Aos.init({
			duration: 2000,
			easing: "ease-in-out-back",
			once: true,
		});
	});

	return (
		<div>
			<Navigation />
			<main>
				<Hero />
				<About />
				<Portfolio />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
export default App;
