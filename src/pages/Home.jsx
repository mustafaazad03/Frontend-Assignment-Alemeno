import { useDispatch } from "react-redux";
import Container from "../components/Container";
import CourseList from "../components/CourseList";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { setCourses } from "../redux/courseContext";
import data from "../data/course.json";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCourses(data));
	}, [dispatch]);
	return (
		<Container>
			<Navbar />
			<Hero />
			<CourseList />
		</Container>
	);
};

export default Home;
