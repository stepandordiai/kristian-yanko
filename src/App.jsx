import portfolioData from "./data/portfolio-data.json";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<div className="masonry">
				{portfolioData.map((project) => {
					return (
						<div key={project.id}>
							<img src={project.img} alt="" />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
