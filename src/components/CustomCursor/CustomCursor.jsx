import { useEffect } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import "./CustomCursor.scss";

const CustomCursor = () => {
	useEffect(() => {
		if (isTouchDevice()) return;

		const customCursor = document.querySelector(".custom-cursor");

		const handleMouseMove = (e) => {
			customCursor.style.top = e.clientY + "px";
			customCursor.style.left = e.clientX + "px";
		};

		document.addEventListener("mousemove", handleMouseMove);
	}, []);
	return <div className="custom-cursor"></div>;
};

export default CustomCursor;
