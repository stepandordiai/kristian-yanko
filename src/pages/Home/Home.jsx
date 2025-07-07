import "./Home.scss";
import portfolioData from "./../../data/portfolio-data.json";

const Home = () => {
	return (
		<div className="home">
			<p>Home</p>
			<div
				className="slider"
				style={{
					"--width": "300px",
					"--height": "200px",
					"--quantity": "3",
				}}
			>
				{portfolioData.map((project, index) => {
					return (
						<img
							key={index}
							className="item"
							// FIXME:
							style={{ "--position": index + 1 }}
							src={project.img}
							alt=""
							loading="lazy"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
