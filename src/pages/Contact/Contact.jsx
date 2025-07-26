import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Kristian Yanko | Контакти</title>
			</Helmet>
			<motion.main
				className="contact"
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
			>
				<div className="contact__left-container">
					<h1 className="contact__title">Контакти</h1>
					<div className="contact__details-container">
						<p>Номер телефону</p>
						<a className="link-effect" href="tel:+420776171400">
							+420 776 171 400
						</a>
					</div>
					<div className="contact__details-container">
						<p>Електронна пошта</p>
						<a className="link-effect" href="mailto:kristian.janko@email.cz">
							kristian.janko@email.cz
						</a>
					</div>
					<div className="contact__details-container">
						<p>Слідкуйте за мною</p>
						<a
							className="link-effect"
							href="https://www.instagram.com/kristian.janko"
							target="_blank"
						>
							Instagram
						</a>
					</div>
				</div>
				<ContactForm />
			</motion.main>
		</>
	);
};

export default Contact;
