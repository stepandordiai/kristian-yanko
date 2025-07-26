import { useState, useEffect } from "react";
import moonIcon from "/icons/moon.png";
import sunIcon from "/icons/sun.png";
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
		<button onClick={toggleDarkMode} className="dark-mode-btn">
			{darkMode ? (
				<img
					style={{ display: "block" }}
					src={sunIcon}
					width={25}
					height={25}
					alt=""
				/>
			) : (
				<img
					style={{ display: "block" }}
					src={moonIcon}
					width={25}
					height={25}
					alt=""
				/>
			)}
		</button>
	);
};

export default DarkModeBtn;
