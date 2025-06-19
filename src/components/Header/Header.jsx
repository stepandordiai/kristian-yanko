import "./Header.scss";
import imgLogo from "/Frame 33.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img width={40} src={imgLogo} alt="" />
				<span>Kristian Yanko</span>
			</div>
		</header>
	);
};

export default Header;
