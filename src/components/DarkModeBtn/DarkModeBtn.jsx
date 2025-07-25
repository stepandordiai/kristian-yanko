import { useState, useEffect } from "react";
import "./DarkModeBtn.scss";

const DarkModeBtn = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		// TODO:
		document.body.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<button onClick={toggleDarkMode} className="dark-mode-btn link-effect">
			{darkMode ? "Світло" : "Темно"}
		</button>
	);
};

export default DarkModeBtn;
