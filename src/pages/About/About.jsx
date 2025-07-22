import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./About.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const About = () => {
	return (
		<>
			<Helmet>
				<title>Kristian Yanko | About me</title>
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
					<h1 className="about__title">Про мене</h1>
				</div>
				<div className="about__container">
					<p>
						Я — архітектор із Чехії, який спеціалізується на проєктуванні
						сімейних будинків і багатоквартирних житлових будівель. Моєю метою є
						створення просторів, що поєднують у собі функціональність, естетику
						та сталість.
					</p>
					<br />
					<p>
						У своїй роботі я зосереджуюсь на глибокому розумінні потреб людей,
						які будуть жити в цих просторах. Незалежно від того, чи це затишний
						приватний будинок, чи житловий комплекс, я прагну створювати
						середовище, яке буде не лише візуально привабливим, а й практичним,
						енергоефективним та гармонійно інтегрованим у навколишній ландшафт.
					</p>
					<br />
					<p>
						Від концепції до реалізації я тісно співпрацюю з клієнтами,
						інженерами та підрядниками, щоб кожен проєкт відповідав чіткому
						баченню, будівельним нормам і приносив довготривалу цінність.
					</p>
					<br />
					<p>
						Якщо ви шукаєте продумані та сучасні архітектурні рішення для
						комфортного життя — я допоможу втілити вашу ідею в реальність.
					</p>
				</div>
			</motion.main>
		</>
	);
};

export default About;
