import { Helmet } from "react-helmet-async";
import "./Contact.scss";

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Kristian Yanko | Contact</title>
			</Helmet>
			<main className="contact">
				<h1 className="contact__title">Contact</h1>
			</main>
		</>
	);
};

export default Contact;
