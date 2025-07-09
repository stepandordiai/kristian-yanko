import { NavLink } from "react-router-dom";
import portfolioData from "./../../assets/data/portfolio-data.json";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

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
		<motion.main
			className="home"
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.5 }}
		>
			<div className="home__top">
				<h1
					style={{ fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }}
				>
					UŽITEČNOST – PEVNOST – KRÁSA V KAŽDÉM DETAILU
				</h1>
				<NavLink to={"/projects"}>Hire me</NavLink>
			</div>
			<div className="home__bottom">
				<div
					className="home__scroller scroller"
					data-speed="slow"
					data-direction="left"
				>
					<div className="scroller__inner">
						<div className="home__title js-home__title">
							{portfolioData.slice(0, 8).map((project) => {
								return (
									<NavLink
										className={"project__link"}
										key={project.id}
										to={`/project-page/${project.id}`}
									>
										<img
											width={300}
											key={project.id}
											src={project.img}
											alt=""
										/>
									</NavLink>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</motion.main>
	);
};

export default Home;
