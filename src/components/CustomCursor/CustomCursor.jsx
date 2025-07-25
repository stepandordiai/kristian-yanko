import { useEffect } from "react";
import "./CustomCursor.scss";

const CustomCursor = () => {
	useEffect(() => {
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
