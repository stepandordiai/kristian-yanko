import { useEffect, useState } from "react";
import "./DarkMode.scss";

const DarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		// TODO:
		document.body.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<>
			<button className="dark-mode-btn" onClick={toggleDarkMode}>
				{darkMode ? "Dark" : "Light"}
			</button>
		</>
	);
};

export default DarkMode;
