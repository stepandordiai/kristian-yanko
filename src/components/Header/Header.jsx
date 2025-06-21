import "./Header.scss";
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
		</header>
	);
};

export default Header;
