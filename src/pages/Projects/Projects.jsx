import "./Projects.scss";
import { useEffect } from "react";
import portfolioData from "../../data/portfolio-data.json";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const pageVariants = {
	// initial: { opacity: 0, y: 100 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};
const Projects = () => {
	useEffect(() => {
		document.querySelectorAll(".home-img").forEach((img, index) => {
			document.addEventListener("scroll", () => {
				const imgRect = img.getBoundingClientRect();
				if (imgRect.top < window.innerHeight - 200) {
					img.classList.add("home-img--active");
				}
			});
			img.addEventListener("load", () => {
				setTimeout(() => {
					const imgRect = img.getBoundingClientRect();
					if (imgRect.top < window.innerHeight - 200) {
						img.classList.add("home-img--active");
					}
				}, 500);
			});

			setTimeout(() => {
				const imgRect = img.getBoundingClientRect();
				if (imgRect.top < window.innerHeight - 200) {
					img.classList.add("home-img--active");
				}
			}, 500);
		});
	});
	return (
		<>
			<div>Work</div>
			<motion.div
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
				className="masonry"
			>
				{portfolioData.map((project, index) => {
					return (
						<NavLink
							className={"project__link"}
							key={index}
							to={`/project-page/${project.id}`}
						>
							<img className="home-img" src={project.img} alt="" />
						</NavLink>
					);
				})}
			</motion.div>
		</>
	);
};

export default Projects;
