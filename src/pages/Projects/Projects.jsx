import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import portfolioData from "../../assets/data/portfolio-data.json";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "../../utils/cursorState";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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

	const handleFilterBtn = (props) => {
		setFilter(props);

		restorateScrollTop();
	};

	const inactiveFilterBtn = "projects__btn dark--active";
	const activeFilterBtn = "projects__btn projects__btn--active dark--active";

	return (
		<>
			<Helmet>
				<title>Kristian Yanko | {t("projects_title")}</title>
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
								onClick={() => handleFilterBtn("all")}
								className={
									filter === "all" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								{t("projects.all")}
							</button>
							<button
								onClick={() => handleFilterBtn("residential")}
								className={
									filter === "residential" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								{t("residential")}
							</button>
							<button
								onClick={() => handleFilterBtn("commercial")}
								className={
									filter === "commercial" ? activeFilterBtn : inactiveFilterBtn
								}
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
							.filter((project) => filter === "all" || project.type === filter)
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
							.filter((project) => filter === "all" || project.type === filter)
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
