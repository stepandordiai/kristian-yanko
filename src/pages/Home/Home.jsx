import { Helmet } from "react-helmet-async";
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

		const projectLinks = document.querySelectorAll(".home__project-link");
		const el = document.createElement("div");
		document.body.appendChild(el);
		el.classList.add("element");
		let mouseX;
		let mouseY;
		projectLinks.forEach((link) => {
			link.addEventListener("mousemove", (e) => {
				mouseX = e.clientX;
				mouseY = e.clientY;
				el.style.top = mouseY + "px";
				el.style.left = mouseX + "px";
				el.classList.add("element--active");
			});

			link.addEventListener("mouseleave", () => {
				el.classList.remove("element--active");
			});

			link.addEventListener("click", () => {
				el.classList.remove("element--active");
				setTimeout(() => {
					el.remove();
				}, 200);
			});
		});
	}, []);
	return (
		<>
			<Helmet>
				<title>Kristian Yanko</title>
			</Helmet>
			<motion.main
				className="home"
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
			>
				<div className="home__top">
					<h1 className="home__title">
						Архітектор житлових будинків - індивідуальні та багатоквартирні
						проєкти
					</h1>
				</div>
				<div className="home__bottom">
					<div
						className="home__scroller scroller"
						data-speed="slow"
						data-direction="left"
					>
						<div className="scroller__inner">
							{portfolioData.slice(0, 8).map((project) => {
								return (
									<NavLink
										className="home__project-link"
										key={project.id}
										to={`/project-page/${project.id}`}
										style={{ cursor: "none" }}
									>
										<img
											className="home__project-img"
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
			</motion.main>
		</>
	);
};

export default Home;
