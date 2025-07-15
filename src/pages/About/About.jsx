import { Helmet } from "react-helmet-async";
import "./About.scss";

const About = () => {
	return (
		<>
			<Helmet>
				<title>Kristian Yanko | About</title>
			</Helmet>
			<main className="about">
				<h1>About</h1>
			</main>
		</>
	);
};

export default About;
