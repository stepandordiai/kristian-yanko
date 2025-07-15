import styles from "./Footer.module.scss";

const Footer = () => {
	const restoreScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className={styles["footer"]}>
			<p>
				Site by{" "}
				<a
					className="link-effect"
					href="https://heeeyooo.studio/"
					target="_blank"
				>
					heeeyooo studio
				</a>
			</p>
			<div>
				<button onClick={restoreScrollToTop} className="link-effect">
					Back to top
				</button>
				<p>&copy; 2025 Kristian Yanko</p>
			</div>
		</footer>
	);
};

export default Footer;
