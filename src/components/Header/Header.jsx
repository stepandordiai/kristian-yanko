import { NavLink } from "react-router-dom";
import imgLogo from "/kristian-yanko-logo-v1.svg";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<NavLink className="header__logo-link" to={"/"}>
				<img width={40} src={imgLogo} alt="Kristian Yanko Logo" />
				<p>
					<span>Kristian</span>
					<br />
					<span>Yanko</span>
				</p>
			</NavLink>
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
