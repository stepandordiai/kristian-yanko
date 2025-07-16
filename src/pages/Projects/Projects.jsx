import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
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
					<h1 className="projects__title">Projects</h1>
				</div>
				<div className="masonry">
					{portfolioData.map((project, index) => {
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
