import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import "./CustomCursor.scss";

const CustomCursor = () => {
	const { t } = useTranslation();

	const customCursor = useRef(null);

	useEffect(() => {
		if (isTouchDevice()) return;

		const handleCursorPosition = (e) => {
			if (customCursor.current) {
				customCursor.current.style.top = e.clientY + "px";
				customCursor.current.style.left = e.clientX + "px";
			}
		};

		document.addEventListener("mousemove", handleCursorPosition);

		return () =>
			document.removeEventListener("mousemove", handleCursorPosition);
	}, []);

	return (
		<div
			ref={customCursor}
			className="custom-cursor"
			data-cursor-value={t("view")}
		></div>
	);
};

export default CustomCursor;
