import Lng from "../Lng/Lng";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {
	const restoreScrollToTop = () => {
		const projectLabels = document.querySelector(".projects__labels-container");
		const masonry = document.querySelector(".masonry");

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		if (projectLabels && masonry) {
			projectLabels.scrollTo({
				top: 0,
				behavior: "smooth",
			});

			masonry.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	const [time, setTime] = useState("");

	useEffect(() => {
		const getCurrentTime = () => {
			const date = dayjs();
			const hours = String(date.hour()).padStart(2, "0");
			const minutes = String(date.minute()).padStart(2, "0");
			const seconds = String(date.second()).padStart(2, "0");

			return `${hours}:${minutes}:${seconds}`;
		};

		setTime(getCurrentTime());

		const interval = setInterval(() => setTime(getCurrentTime()), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<footer className="footer">
			<div className="footer__left-container">
				<div>
					<a
						className="link-effect"
						href="https://www.instagram.com/kristian.janko"
						target="_blank"
					>
						Instagram
					</a>
				</div>
				<div>
					<Lng />
					<p style={{ marginTop: 15 }}>
						Site by{" "}
						<a
							className="link-effect"
							href="https://heeeyooo.studio/"
							target="_blank"
						>
							heeeyooo studio
						</a>
					</p>
				</div>
			</div>
			<div className="footer__right-container">
				<div className="footer__time">{time}</div>
				<div style={{ textAlign: "end" }}>
					<button onClick={restoreScrollToTop} className="link-effect">
						На початок сторінки
					</button>
					<p style={{ marginTop: 15 }}>&copy; 2025 Kristian Yanko</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
