import Lng from "../Lng/Lng";
import "./Footer.scss";

const Footer = () => {
	const restoreScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const date = new Date();
	const hoursNow = date.getHours();
	const minutesNow = date.getMinutes();

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
				<div style={{ textAlign: "end" }}>
					<button onClick={restoreScrollToTop} className="link-effect">
						Back to top
					</button>
					<p style={{ marginTop: 15 }}>&copy; 2025 Kristian Yanko</p>
				</div>
				<p>
					<span>{hoursNow}</span>
					<span className="colon"> : </span>
					<span>{minutesNow}</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
