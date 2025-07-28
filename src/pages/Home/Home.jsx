import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import portfolioData from "./../../assets/data/portfolio-data.json";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "../../utils/cursorState";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Home = () => {
	const { t } = useTranslation();

	const { lng } = useParams();

	function addAnimation() {
		const scroller = document.querySelector(".scroller");

		// setAttribute expects both arguments to be strings
		scroller?.setAttribute("data-animated", "true");

		const scrollerInner = scroller?.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner.children);

		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);

			duplicatedItem.setAttribute("aria-hidden", "true");
			duplicatedItem.addEventListener("mousemove", activeCursor);
			duplicatedItem.addEventListener("mouseleave", inactiveCursor);
			duplicatedItem.addEventListener("click", removeCursor);
			scrollerInner?.appendChild(duplicatedItem);
		});
	}

	useEffect(() => {
		addAnimation();
	}, []);
	return (
		<>
			<Helmet>
				<title>Kristian Yanko | {t("home.title")}</title>
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
					<h1 className="home__title">{t("home.title")}</h1>
					<NavLink className="home__link" to={`/${lng}/contact-me`}>
						{t("contact_me")}
					</NavLink>
				</div>
				<div className="home__bottom">
					<div
						className="home__scroller scroller"
						data-speed="slow"
						data-direction="left"
					>
						<div className="scroller__inner">
							{portfolioData
								.slice()
								.reverse()
								.map((project) => {
									return (
										<NavLink
											onMouseMove={activeCursor}
											onMouseLeave={inactiveCursor}
											onClick={removeCursor}
											className="home__project-link"
											key={project.id}
											to={`/${lng}/project-page/${project.id}`}
										>
											<img
												className="home__project-img"
												key={project.id}
												src={project.img[0]}
												style={{ pointerEvents: "none" }}
												alt={project.name}
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
