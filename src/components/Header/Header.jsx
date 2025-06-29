import "./Header.scss";
import { NavLink } from "react-router-dom";
import imgLogo from "/kristian-yanko-logo-v1.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img width={40} src={imgLogo} alt="Kristian Yanko Logo" />
				<p>
					<span>Kristian</span>
					<br />
					<span>Yanko</span>
				</p>
			</div>
			<nav className="header__nav">
				<NavLink className={"header__nav-link"} to={"/"}>
					Home
				</NavLink>
				<NavLink className={"header__nav-link"} to={"/about"}>
					About
				</NavLink>
				<NavLink className={"header__nav-link"} to={"/contact"}>
					Contact
				</NavLink>
			</nav>
			<div>
				<a href="">Instagram</a>
			</div>
		</header>
	);
};

export default Header;
