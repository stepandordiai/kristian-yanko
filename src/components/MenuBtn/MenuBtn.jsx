import Menu from "../Menu/Menu";
import "./MenuBtn.scss";

const MenuBtn = () => {
	return (
		<div className="menu-btn">
			<span>+</span>
			<Menu />
		</div>
	);
};

export default MenuBtn;
