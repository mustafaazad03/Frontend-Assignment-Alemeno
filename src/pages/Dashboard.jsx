import { useSelector } from "react-redux";
import Container from "../components/Container";
import Breadcrum from "../components/CourseDetail/Breadcrum";
import Tabs from "../components/Dashboard/Tabs";
import CourseCard from "../components/CourseCard";
import { useState } from "react";

const Dashboard = () => {
	const pages = [{ name: "Dashboard", href: "/dashboard", current: true }];
	const enrolledCourses = useSelector((state) => state.course.enrolledCourses);
	const courses = useSelector((state) => state.course.courses);

	// Filtered courses based on the tab
	const getFilteredCourses = (filter) => {
		switch (filter) {
			case "progress":
				return enrolledCourses.filter((course) => course.progress < 100);
			case "completed":
				return enrolledCourses.filter((course) => course.progress === 100);
			default:
				return enrolledCourses;
		}
	};

	const [currentFilter, setCurrentFilter] = useState("all");

	return (
		<Container>
			<div className="mt-16">
				<Breadcrum pages={pages} />
			</div>
			<h1 className="text-3xl font-bold mt-6 capitalize">
				Welcome to your dashboard
			</h1>
			<div className="py-6">
				<Tabs onTabChange={(filter) => setCurrentFilter(filter)} />
			</div>
			<div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 mt-6">
				{getFilteredCourses(currentFilter).map((enrolled) => {
					const course = courses.find((c) => c.id === enrolled.courseId);
					return (
						<CourseCard
							key={course.id}
							{...course}
							progress={enrolled.progress}
						/>
					);
				})}
			</div>
		</Container>
	);
};

export default Dashboard;
