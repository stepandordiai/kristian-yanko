import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import portfolioData from "../../assets/data/portfolio-data.json";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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
	};

	useEffect(() => {
		document.querySelectorAll(".projects__link").forEach((img) => {
			document.addEventListener("scroll", () => {
				const imgRect = img.getBoundingClientRect();
				if (imgRect.top < window.innerHeight) {
					img.classList.add("projects__link--active");
				}
			});
			img.addEventListener("load", () => {
				setTimeout(() => {
					const imgRect = img.getBoundingClientRect();
					if (imgRect.top < window.innerHeight) {
						img.classList.add("projects__link--active");
					}
				}, 500);
			});

			setTimeout(() => {
				const imgRect = img.getBoundingClientRect();
				if (imgRect.top < window.innerHeight) {
					img.classList.add("projects__link--active");
				}
			}, 500);
		});
	});
	const inactiveFilterBtn = "projects__btn";
	const activeFilterBtn = "projects__btn projects__btn--active";

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
						<h1 className="projects__title">Проекти</h1>
						<div className="projects__btn-container">
							<button
								onClick={() => handleFilterBtn("all")}
								className={
									filter === "all" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								All projects
							</button>
							<button
								onClick={() => handleFilterBtn("family")}
								className={
									filter === "family" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								Family houses
							</button>
							<button
								onClick={() => handleFilterBtn("not-family")}
								className={
									filter === "not-family" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								Not family houses
							</button>
						</div>
					</div>
				</div>
				<div className="masonry">
					{portfolioData
						.filter((project) => filter === "all" || project.type === filter)
						.map((project, index) => {
							return (
								<NavLink
									key={index}
									className="projects__link"
									to={`/project-page/${project.id}`}
								>
									<img src={project.img} alt="" />
								</NavLink>
							);
						})}
				</div>
			</motion.main>
		</>
	);
};

export default Projects;
