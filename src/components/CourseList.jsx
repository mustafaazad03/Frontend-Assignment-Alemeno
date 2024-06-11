import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import CourseCard from "./CourseCard";
import { useMemo } from "react";

const CourseList = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const page = parseInt(searchParams.get("page")) || 1;

	// Get courses from the Redux store
	const courses = useSelector((state) => state.course.courses);

	// Calculate pagination
	const COURSES_PER_PAGE = 9;
	const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
	const displayedCourses = useMemo(
		() => courses.slice((page - 1) * COURSES_PER_PAGE, page * COURSES_PER_PAGE),
		[courses, page, COURSES_PER_PAGE]
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
