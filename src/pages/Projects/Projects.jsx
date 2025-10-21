import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import portfolioData from "../../assets/data/portfolio-data.json";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "../../utils/cursorState";
import "./Projects.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Projects = () => {
	const { t } = useTranslation();

	const { lng } = useParams();

	const [filter, setFilter] = useState("all");

	return (
		<>
			<Helmet>
				<title>{t("projects_title")} | Kristian Yanko</title>
			</Helmet>
			<motion.main
				className="projects"
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
			>
				<div className="projects__title-container">
					<div className="projects__title-inner">
						<h1 className="projects__title">{t("projects_title")}</h1>
						<div className="projects__btn-container">
							<button
								onClick={() => setFilter("all")}
								className={`projects__btn dark--active ${
									filter === "all" ? "projects__btn--active" : ""
								}`}
							>
								{t("projects.all")}
							</button>
							<button
								onClick={() => setFilter("residential")}
								className={`projects__btn dark--active ${
									filter === "residential" ? "projects__btn--active" : ""
								}`}
							>
								{t("residential")}
							</button>
							<button
								onClick={() => setFilter("commercial")}
								className={`projects__btn dark--active ${
									filter === "commercial" ? "projects__btn--active" : ""
								}`}
							>
								{t("commercial")}
							</button>
						</div>
					</div>
				</div>
				<div className="projects__mansory-container">
					<div className="projects__labels-container">
						{[...portfolioData]
							.reverse()
							.filter((project) => filter === "all" || filter === project.type)
							.map((project, index) => {
								return (
									<div key={index} className="projects__label-container">
										<span style={{ fontSize: "0.8rem" }}>
											{String(project.id).padStart(2, "0")}
										</span>
										<HashLink to={`#${index}`} smooth>
											<img
												src={project.img[0]}
												alt={project.name}
												loading="lazy"
											/>
										</HashLink>
									</div>
								);
							})}
					</div>
					<div className="masonry">
						{[...portfolioData]
							.reverse()
							.filter((project) => filter === "all" || filter === project.type)
							.map((project, index) => {
								return (
									<NavLink
										onMouseMove={activeCursor}
										onMouseLeave={inactiveCursor}
										onClick={removeCursor}
										key={index}
										className="projects__link"
										id={index}
										to={`/${lng}/project-page/${project.id}`}
									>
										<img
											src={project.img[0]}
											alt={project.name}
											loading="lazy"
										/>
									</NavLink>
								);
							})}
					</div>
				</div>
			</motion.main>
		</>
	);
};

export default Projects;
