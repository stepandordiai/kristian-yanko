import { useEffect, useState } from "react";
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
		<button className="dark-mode-btn link-effect" onClick={toggleDarkMode}>
			{darkMode ? "Темно" : "Світло"}
		</button>
	);
};

export default DarkModeBtn;
