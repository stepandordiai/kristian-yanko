import { Helmet } from "react-helmet-async";
import { useParams, NavLink } from "react-router-dom";
import portfolioData from "./../../assets/data/portfolio-data.json";
import { motion } from "framer-motion";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "../../utils/cursorState";
import { useTranslation } from "react-i18next";
import "./ProjectPage.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const ProjectPage = () => {
	const { t } = useTranslation();

	const { id, lng } = useParams();

	const project = portfolioData.find((project) => project.id == id);

	const relatedProjects = portfolioData.filter((item) => {
		return item.type === project.type && item.name !== project.name;
	});

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
				<div className="project-page__img-container">
					<div>
						<img src={project.img[0]} alt={project.name} loading="lazy" />
					</div>
					<div>
						<img src={project.img[1]} alt={project.name} loading="lazy" />
					</div>
				</div>
				<div className="project-page__title-container">
					<p>{project.year}</p>
					<h1 className="project-page__title">{project.name}</h1>
				</div>
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
				<p style={{ margin: "30px 0", textAlign: "right" }}>
					{t("project_page.need_a_project")}{" "}
					<NavLink className="home__link" to={`/${lng}/contact-me`}>
						{t("contact_me")}
					</NavLink>
				</p>
				{relatedProjects.length > 0 && (
					<div>
						<p className="project-page__related-title">
							{t("project_page.you_may_also_like")}
						</p>
						<div className="project-page__related-grid">
							{relatedProjects.map((project) => {
								return (
									<NavLink
										key={project.id}
										onMouseMove={activeCursor}
										onMouseLeave={inactiveCursor}
										onClick={removeCursor}
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
				)}
			</motion.div>
		</>
	);
};

export default ProjectPage;
