import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
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

		restorateScrollTop();
	};

	const restorateScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		// document.querySelector(".projects__labels-container").scrollTo({
		// 	top: 0,
		// 	behavior: "smooth",
		// });

		// document.querySelector(".masonry").scrollTo({
		// 	top: 0,
		// 	behavior: "smooth",
		// });
	};

	useEffect(() => {
		const el = document.createElement("div");
		el.classList.add("element");
		if (!document.body.contains(el)) {
			document.body.appendChild(el);
		}

		const projectLinks = document.querySelectorAll(".projects__link");

		const handleMouseMove = (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			el.style.top = mouseY + "px";
			el.style.left = mouseX + "px";
			el.classList.add("element--active");
		};

		const handleMouseLeave = () => {
			el.classList.remove("element--active");
		};

		const handleClick = () => {
			el.classList.remove("element--active");
			setTimeout(() => {
				el.remove();
			}, 200);
		};

		projectLinks.forEach((link) => {
			link.addEventListener("mousemove", handleMouseMove);
			link.addEventListener("mouseleave", handleMouseLeave);
			link.addEventListener("click", handleClick);
		});

		return () => {
			projectLinks.forEach((link) => {
				link.removeEventListener("mousemove", handleMouseMove);
				link.removeEventListener("mouseleave", handleMouseLeave);
				link.removeEventListener("click", handleClick);
			});
			el.remove();
		};
	}, []);

	// useEffect(() => {
	// 	document.querySelectorAll(".projects__link").forEach((img) => {
	// 		document.addEventListener("scroll", () => {
	// 			const imgRect = img.getBoundingClientRect();
	// 			if (imgRect.top < window.innerHeight) {
	// 				img.classList.add("projects__link--active");
	// 			}
	// 		});
	// 		img.addEventListener("load", () => {
	// 			setTimeout(() => {
	// 				const imgRect = img.getBoundingClientRect();
	// 				if (imgRect.top < window.innerHeight) {
	// 					img.classList.add("projects__link--active");
	// 				}
	// 			}, 500);
	// 		});

	// 		setTimeout(() => {
	// 			const imgRect = img.getBoundingClientRect();
	// 			if (imgRect.top < window.innerHeight) {
	// 				img.classList.add("projects__link--active");
	// 			}
	// 		}, 500);
	// 	});
	// });
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
								onClick={() => handleFilterBtn("family")}
								className={
									filter === "family" ? activeFilterBtn : inactiveFilterBtn
								}
							>
								Житлові будинки
							</button>
							<button
								onClick={() => handleFilterBtn("not-family")}
								className={
									filter === "not-family" ? activeFilterBtn : inactiveFilterBtn
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
									<a
										onClick={restorateScrollTop}
										key={index}
										href={`#${index}`}
									>
										<img src={project.img} alt="" />
									</a>
								);
							})}
					</div>
					<div className="masonry">
						{portfolioData
							.filter((project) => filter === "all" || project.type === filter)
							.map((project, index) => {
								return (
									<NavLink
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
