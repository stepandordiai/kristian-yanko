import "./Home.scss";
import portfolioData from "./../../data/portfolio-data.json";
import { div } from "framer-motion/m";

const Home = () => {
	return (
		<div className="home">
			{/* <p>Home</p> */}
			<div
				className="slider"
				// reverse="true"
				// FIXME:
				style={{
					"--width": "500px",
					"--height": "400px",
					"--quantity": "8",
				}}
			>
				<div className="list">
					{portfolioData.map((project, index) => {
						return (
							<div
								key={index}
								className="item"
								// FIXME:
								style={{ "--position": index + 1 }}
							>
								{/* <a href="" target="_blank"> */}
								<img src={project.img} alt="" loading="lazy" />
								{/* </a> */}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
