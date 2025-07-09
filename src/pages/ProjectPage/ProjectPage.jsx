import "./ProjectPage.scss";
import { useParams } from "react-router-dom";
import portfolioData from "./../../assets/data/portfolio-data.json";
import { motion } from "framer-motion";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const ProjectPage = () => {
	const { id } = useParams();

	const project = portfolioData.find((project) => project.id == id);

	return (
		<motion.div
			className="project-page"
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.5 }}
		>
			<img src={project.img} alt="" />
		</motion.div>
	);
};

export default ProjectPage;
