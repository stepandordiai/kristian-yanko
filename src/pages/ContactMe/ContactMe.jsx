import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useTranslation } from "react-i18next";
import "./ContactMe.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const ContactMe = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>Kristian Yanko | {t("contact_me")}</title>
			</Helmet>
			<motion.main
				className="contact-me"
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
			>
				<div className="contact__left-container">
					<h1 className="contact-me__title">{t("contact_me")}</h1>
					<div>
						<p
							style={{
								fontSize: "1.5rem",
								fontWeight: 500,
								marginBottom: 15,
							}}
						>
							Pořadník zakázek
						</p>
						<p>
							Vzhledem k velkému množství zakázek jsem zavedl pořadník.
							<br />
							<br />
							Funguje to jednoduše – uhradíte 50 % ceny projektu, domluvíme si
							schůzku a společně připravíme předběžné zadání. Jakmile dokončím
							předchozí zakázky, pustím se do té vaší. Pořadí je pevně dané a
							nelze jej přeskočit ani předběhnout.
						</p>
					</div>
					<div>
						<p
							style={{
								fontSize: "1.5rem",
								fontWeight: 500,
								marginBottom: 15,
							}}
						>
							Aktuální pořadí
						</p>
						<p>
							Rodinné domy – Chust (do konce srpna 2025)
							<br />
							<br />
							Rodinné domy – Trutnov (do konce října 2025)
							<br />
							<br />
							..... (od listopadu 2025)
						</p>
					</div>
					<div>
						<p
							style={{
								fontSize: "1.5rem",
								fontWeight: 500,
								marginBottom: 15,
							}}
						>
							Stručný harmonogram výstavby
						</p>
						<p>
							Na projekční práce si vyhraďte přibližně 4 měsíce až 1 rok – právě
							v nich spočívá klíč k úspěchu. Následně počítejte se stavbou v
							rozmezí 1 až 2 roky.
						</p>
					</div>
					<div className="contact-me__details-container">
						<div className="contact__details-container">
							<p>{t("tel")}</p>
							<a className="link-effect" href="tel:+420776171400">
								+420 776 171 400
							</a>
						</div>
						<div className="contact__details-container">
							<p>{t("contact.email")}</p>
							<a className="link-effect" href="mailto:kristian.janko@email.cz">
								kristian.janko@email.cz
							</a>
						</div>
						<div className="contact__details-container">
							<p>{t("contact.follow_me")}</p>
							<a
								className="link-effect"
								href="https://www.instagram.com/kristian.janko"
								target="_blank"
							>
								Instagram
							</a>
						</div>
					</div>
				</div>
				<ContactForm />
			</motion.main>
		</>
	);
};

export default ContactMe;
