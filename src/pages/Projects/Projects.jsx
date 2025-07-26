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
import "./Projects.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};
const Projects = () => {
	const [filter, setFilter] = useState("all");

	const handleFilterBtn = (props) => {
		setFilter(props);

		restorateScrollTop();
	};

	const restorateScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const inactiveFilterBtn = "projects__btn dark--active";
	const activeFilterBtn = "projects__btn projects__btn--active dark--active";

	return (
		<>
			<Helmet>
				<title>Kristian Yanko | Projects</title>
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
						<h1 className="projects__title">Проєкти</h1>
						<div className="projects__btn-container">
							<button
								onClick={() => handleFilterBtn("all")}
								className={
									filter === "all" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								Всі проєкти
							</button>
							<button
								onClick={() => handleFilterBtn("residential")}
								className={
									filter === "residential" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								Житлові будинки
							</button>
							<button
								onClick={() => handleFilterBtn("commercial")}
								className={
									filter === "commercial" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								Комерційні будинки
							</button>
						</div>
					</div>
				</div>
				<div className="projects__mansory-container">
					<div className="projects__labels-container">
						{portfolioData
							.filter((project) => filter === "all" || project.type === filter)
							.map((project, index) => {
								return (
									<div key={index} className="projects__label-container">
										<span style={{ fontSize: "0.8rem" }}>
											{String(project.id).padStart(2, "0")}
										</span>
										<a onClick={restorateScrollTop} href={`#${index}`}>
											<img src={project.img} alt="" />
										</a>
									</div>
								);
							})}
					</div>
					<div className="masonry">
						{portfolioData
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
										to={`/project-page/${project.id}`}
									>
										<img src={project.img} alt="" />
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
