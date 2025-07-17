import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
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
				<h1 className="contact__title">Контакти</h1>
				<div className="contact__form-container">
					<p style={{ fontSize: "2rem", marginBottom: 15 }}>Get in touch</p>
					<form className="contact__form" action="">
						<input type="text" placeholder="Ім'я" />
						<input type="tel" placeholder="Номер телефону" />
						<textarea name="" id="" placeholder="Повідомлення"></textarea>
						<button type="submit">Відправити</button>
					</form>
				</div>
			</motion.main>
		</>
	);
};

export default Contact;
