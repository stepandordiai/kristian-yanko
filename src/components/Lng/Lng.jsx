import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import i18n from "i18next";
import "./Lng.scss";

const Lng = () => {
	// TODO: FIX
	const { lng } = useParams(); // current language from URL
	const location = useLocation(); // full path
	const navigate = useNavigate();

	const supportedLngs = ["cs", "uk"];

	useEffect(() => {
		if (lng && supportedLngs.includes(lng)) {
			i18n.changeLanguage(lng);
			localStorage.setItem("i18nextLng", lng);
		}
	}, [lng]);

	const handleLanguage = (lng) => {
		if (!supportedLngs.includes(lng)) return;

		const newPath = location.pathname.replace(/^\/(cs|uk)/, `/${lng}`);
		i18n.changeLanguage(lng);
		localStorage.setItem("i18nextLng", lng);
		navigate(newPath + location.search, { replace: true });
	};

	return (
		<div>
			<button
				onClick={() => handleLanguage("cs")}
				className={`lng__btn--active link-effect ${
					lng === "cs" ? "link-effect--active" : ""
				}`}
			>
				CZ
			</button>
			<span> | </span>
			<button
				onClick={() => handleLanguage("uk")}
				className={`lng__btn--active link-effect ${
					lng === "uk" ? "link-effect--active" : ""
				}`}
			>
				UA
			</button>
		</div>
	);
};

export default Lng;
