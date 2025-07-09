import "./Home.scss";
import portfolioData from "./../../data/portfolio-data.json";
import { img } from "framer-motion/client";
import { useEffect } from "react";

const Home = () => {
	function addAnimation() {
		const scroller = document.querySelector(".scroller");

		// setAttribute expects both arguments to be strings
		scroller?.setAttribute("data-animated", "true");

		const scrollerInner = scroller?.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner.children);

		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);

			duplicatedItem.setAttribute("aria-hidden", "true");
			scrollerInner?.appendChild(duplicatedItem);
		});
	}

	useEffect(() => {
		addAnimation();
	}, []);
	return (
		<div className="home">
			<div
				className="home__scroller scroller"
				data-speed="slow"
				data-direction="left"
			>
				<div className="scroller__inner">
					<h1 className="home__title js-home__title">
						{portfolioData.map((project) => {
							return (
								<img
									style={{ padding: 20 }}
									width={200}
									key={project.id}
									src={project.img}
									alt=""
								/>
							);
						})}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
