import { useParams, useLocation, useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useEffect } from "react";
import "./Lng.scss";

const Lng = () => {
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

	const inactiveLngBtn = "lng__btn--active link-effect";
	const activeLngBtn = "lng__btn--active link-effect link-effect--active";

	return (
		<div>
			<button
				onClick={() => handleLanguage("cs")}
				className={lng === "cs" ? activeLngBtn : inactiveLngBtn}
			>
				CZ
			</button>
			<span> | </span>
			<button
				onClick={() => handleLanguage("uk")}
				className={lng === "uk" ? activeLngBtn : inactiveLngBtn}
			>
				UA
			</button>
		</div>
	);
};

export default Lng;
