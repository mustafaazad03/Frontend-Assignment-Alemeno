import Container from "../components/Container";
import CourseList from "../components/CourseList";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<Container>
			<Navbar />
			<Hero />
			<CourseList />
		</Container>
	);
};

export default Home;
