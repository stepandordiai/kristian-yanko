import { NavLink } from "react-router-dom";
import MenuBtn from "../MenuBtn/MenuBtn";
import Menu from "../Menu/Menu";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import projectsData from "./../../assets/data/portfolio-data.json";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.scss";

const Header = () => {
	const inactiveLink = "header__nav-link link-effect";
	const activeLink = "header__nav-link link-effect link-effect--active";

	const { t } = useTranslation();

	const { lng } = useParams();

	return (
		<header className="header">
			<div className="header__top">
				<NavLink className="header__logo-link" to={`/${lng}/`}>
					<div className="header__logo-link-txt">Kristian Yanko</div>
				</NavLink>
				<nav className="header__nav">
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={`/${lng}/`}
						end
					>
						{t("home_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={`/${lng}/about`}
					>
						{t("about_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={`/${lng}/projects`}
					>
						<span>{t("projects_title")}</span>
						<span className="header__projects-qty">{projectsData.length}</span>
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={`/${lng}/contact`}
					>
						{t("contact_title")}
					</NavLink>
				</nav>
				<div className="header__right-section">
					<DarkModeBtn />
					<a
						className="header__link link-effect"
						href="https://www.instagram.com/kristian.janko"
						target="_blank"
					>
						Instagram
					</a>
					<MenuBtn />
				</div>
			</div>
			<div className="header__bottom">
				<Menu />
			</div>
		</header>
	);
};

export default Header;
