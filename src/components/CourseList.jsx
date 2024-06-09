import Pagination from "./Pagination";
import data from "../data/course.json";
import { useLocation } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseList = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const page = parseInt(searchParams.get("page")) || 1;

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-auto py-8 gap-6">
				{data.slice((page - 1) * 9, page * 9).map((course) => (
					<CourseCard
						key={course.id}
						link={course.link}
						thumbnail={course.thumbnail}
						name={course.name}
						creatorProfileImage={course.creatorProfileImage}
						courseUpdate={course.courseUpdate}
						enrollmentStatus={course.enrollmentStatus}
						instructor={course.instructor}
					/>
				))}
			</div>
			<Pagination totalPages={Math.ceil(data.length / 9)} />
		</>
	);
};

export default CourseList;
