import portfolioData from "./data/portfolio-data.json";
import "./App.scss";
import Header from "./components/Header/Header";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.querySelectorAll(".home-img").forEach((img, index) => {
			document.addEventListener("scroll", () => {
				const imgRect = img.getBoundingClientRect();
				if (imgRect.top < window.innerHeight) {
					img.classList.add("home-img--active");
				}
			});
			img.addEventListener("load", () => {
				setTimeout(() => {
					const imgRect = img.getBoundingClientRect();
					if (imgRect.top < window.innerHeight) {
						img.classList.add("home-img--active");
					}
				}, 1000);
			});
		});
	}, []);

	return (
		<>
			<Header />
			<div className="masonry">
				{portfolioData.map((project, index) => {
					return (
						<div key={index}>
							<img className="home-img" src={project.img} alt="" />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
