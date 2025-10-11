import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./About.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const About = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("about_title")} | Kristian Yanko</title>
			</Helmet>
			<motion.main
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
				className="about"
			>
				<div className="about__title-container">
					<h1 className="about__title">{t("about_title")}</h1>
				</div>
				<div className="about__container">
					<p>{t("about.desc_1")}</p>
					<br />
					<p>{t("about.desc_2")}</p>
					<br />
					<p>{t("about.desc_3")}</p>
					<br />
					<p>{t("about.desc_4")}</p>
				</div>
			</motion.main>
		</>
	);
};

export default About;
