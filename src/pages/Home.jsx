import Container from "../components/Container";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Hero />
			</Container>
		</>
	);
};

export default Home;
