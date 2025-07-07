import plusIcon from "/plus.png";
import plusIconWhite from "/plus-white.png";
import "./MenuBtn.scss";

const MenuBtn = () => {
	const toggleMenuBtn = () => {
		document
			.querySelector(".header__bottom")
			.classList.toggle("header__bottom--active");
		document.querySelectorAll(".menu-btn__icon").forEach((icon) => {
			icon.classList.toggle("menu-btn__icon--active");
		});
	};

	return (
		<div onClick={toggleMenuBtn} className="menu-btn">
			<img
				className="menu-btn__icon dark-logo"
				width={20}
				src={plusIcon}
				alt=""
			/>
			<img
				className="menu-btn__icon light-logo"
				width={20}
				src={plusIconWhite}
				alt=""
			/>
		</div>
	);
};

export default MenuBtn;
