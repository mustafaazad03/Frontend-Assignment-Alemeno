import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import CourseCard from "./CourseCard";

const CourseList = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const page = parseInt(searchParams.get("page")) || 1;

	// Get courses from the Redux store
	const courses = useSelector((state) => state.course.courses);

	// Calculate pagination
	const coursesPerPage = 9;
	const totalPages = Math.ceil(courses.length / coursesPerPage);
	const displayedCourses = courses.slice(
		(page - 1) * coursesPerPage,
		page * coursesPerPage
	);

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-auto py-8 gap-6">
				{displayedCourses.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
						link={`/course/${course.id}`}
						thumbnail={course.thumbnail}
						name={course.name}
						enrollmentStatus={course.enrollmentStatus}
						instructor={course.instructor}
					/>
				))}
			</div>
			<Pagination totalPages={totalPages} />
		</>
	);
};

export default CourseList;
