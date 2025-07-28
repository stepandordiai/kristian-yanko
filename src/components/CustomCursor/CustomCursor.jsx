import { useEffect } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import { useTranslation } from "react-i18next";
import "./CustomCursor.scss";

const CustomCursor = () => {
	const { t } = useTranslation();

	useEffect(() => {
		if (isTouchDevice()) return;

		const customCursor = document.querySelector(".custom-cursor");

		const handleMouseMove = (e) => {
			customCursor.style.top = e.clientY + "px";
			customCursor.style.left = e.clientX + "px";
		};

		document.addEventListener("mousemove", handleMouseMove);
	}, []);
	return <div className="custom-cursor" data-cursor-value={t("view")}></div>;
};

export default CustomCursor;
