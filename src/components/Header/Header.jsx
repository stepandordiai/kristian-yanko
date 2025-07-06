import { NavLink } from "react-router-dom";
import imgLogo from "/kristian-yanko-logo-v1.png";
import "./Header.scss";
import MenuBtn from "../MenuBtn/MenuBtn";

const Header = () => {
	const inactiveLink = "header__nav-link link-effect";
	const activeLink = "header__nav-link link-effect link-effect--active";

	return (
		<header className="header">
			<NavLink className="header__logo-link" to={"/"}>
				{/* <img
					className="header__logo-link-img"
					width={15}
					// height={20}
					src={imgLogo}
					alt="Kristian Yanko Logo"
				/> */}
				<div className="header__logo-link-txt">
					Kristian Yanko
					{/* <span>Kristian</span> */}
					{/* <span>Yanko</span> */}
				</div>
			</NavLink>
			<nav className="header__nav">
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/"}
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/about"}
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/contact"}
				>
					Contact
				</NavLink>
			</nav>
			{/* <div className="header__right-section"> */}
			<a
				className="header__link link-effect"
				href="https://www.instagram.com/kristian.janko"
				target="_blank"
			>
				Instagram
			</a>
			<MenuBtn />
			{/* </div> */}
		</header>
	);
};

export default Header;
