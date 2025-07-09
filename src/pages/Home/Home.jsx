import "./Home.scss";
import portfolioData from "./../../assets/data/portfolio-data.json";
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
		<main className="home">
			<div className="home__top">
				<h1>UŽITEČNOST – PEVNOST – KRÁSA V KAŽDÉM DETAILU</h1>
			</div>
			<div className="home__bottom">
				<div
					className="home__scroller scroller"
					data-speed="slow"
					data-direction="left"
				>
					<div className="scroller__inner">
						<div className="home__title js-home__title">
							{portfolioData.map((project) => {
								return (
									<img width={300} key={project.id} src={project.img} alt="" />
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
