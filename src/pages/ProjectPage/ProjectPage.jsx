import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import portfolioData from "./../../assets/data/portfolio-data.json";
import { motion } from "framer-motion";
import "./ProjectPage.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const ProjectPage = () => {
	const { id } = useParams();

	const project = portfolioData.find((project) => project.id == id);

	return (
		<>
			<Helmet>
				<title>Kristian Yanko | {project.name}</title>
			</Helmet>
			<motion.div
				className="project-page"
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
			>
				<img src={project.img} alt="" />
				<h1 className="project-page__title">{project.name}</h1>
				<p className="project-page__info">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fuga
					harum quis quo quidem provident natus culpa obcaecati ullam
					perspiciatis possimus doloremque perferendis! Repellat quo nulla,
					provident excepturi vel quam. Quae, assumenda labore. Eius voluptate
					autem numquam ducimus incidunt ea dolorem nesciunt dignissimos,
					tempore, cumque molestiae quasi maxime libero corrupti accusantium!
					Adipisci ex incidunt autem odio nisi? Harum, excepturi recusandae?
					Quisquam voluptatibus officia expedita dignissimos? Porro officia
					veritatis facere, explicabo consequuntur culpa, doloribus fuga
					voluptatem consectetur magni, voluptate quasi voluptatum laboriosam
					quia animi? Tempora, porro consectetur dolore nesciunt expedita
					maiores? Quas iste consequuntur odit delectus quisquam vel maxime
					aliquid accusamus id, labore libero, necessitatibus voluptatibus quae,
					asperiores totam reiciendis? Quia perferendis aliquam praesentium
					maxime est necessitatibus? Aspernatur officiis vero earum! Autem,
					voluptatibus neque blanditiis assumenda repellat impedit quo iusto.
					Cumque nobis saepe labore eum consequatur magnam veniam quia
					perferendis. Voluptates, accusamus vitae veritatis facere illo
					reprehenderit nulla quos eum necessitatibus! Mollitia deserunt saepe
					neque nostrum, unde architecto, labore natus aliquam debitis obcaecati
					vel? Velit ratione autem molestiae beatae temporibus, modi unde
					aspernatur at incidunt et, sapiente commodi optio nobis consectetur?
					Aut odio neque quibusdam harum ad expedita voluptas mollitia
					cupiditate, temporibus sint deleniti omnis. Totam laudantium commodi
					modi sunt nemo. Voluptas corrupti esse ipsum reprehenderit labore
					exercitationem deserunt in dolorem. Doloremque corrupti quae
					temporibus accusantium qui provident dicta dignissimos quod! Culpa et
					facilis dolorum soluta cupiditate iure maiores, quaerat distinctio
					numquam nulla quae tenetur doloribus aspernatur amet perspiciatis fuga
					expedita. Impedit similique quo excepturi rerum, provident, pariatur
					odit aut sequi unde possimus architecto soluta quis eum, nobis quae
					atque. Deserunt commodi consequatur quae quisquam nesciunt aliquid
					doloremque modi autem deleniti. Vero animi voluptatibus doloremque nam
					assumenda, quia blanditiis labore a voluptatem earum cum placeat culpa
					neque esse dolorem est saepe laudantium, odio, enim laborum cumque ea
					debitis hic harum. Aspernatur?
				</p>
			</motion.div>
		</>
	);
};

export default ProjectPage;
