import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCourse, updateSyllabusProgress } from "../redux/courseContext";
import MainSection from "../components/CourseDetail/MainSection";
import RightSection from "../components/CourseDetail/RightSection";
import Container from "../components/Container";
import Syllabus from "../components/CourseDetail/Syllabus";
import Breadcrum from "../components/CourseDetail/Breadcrum";

const CourseDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const course = useSelector((state) => state.course.selectedCourse);
	const courses = useSelector((state) => state.course.courses);
	const enrolledCourses =
		JSON.parse(localStorage.getItem("enrolledCourses")) || [];
	const syllabusProgress =
		enrolledCourses.find((course) => course.courseId === parseInt(id))
			?.syllabusProgress || [];

	const handleToggleComplete = (index, completed) => {
		dispatch(
			updateSyllabusProgress({
				courseId: parseInt(id),
				syllabusIndex: index,
				isComplete: completed,
			})
		);
	};

	useEffect(() => {
		if (courses.length > 0) {
			dispatch(selectCourse(parseInt(id)));
		}
	}, [dispatch, id, courses]);

	if (!course) {
		return <div>Loading...</div>;
	}

	const pages = [
		{ name: course.name, href: `/course/${course.id}`, current: true },
	];

	return (
		<Container>
			<div className="mt-16">
				<Breadcrum pages={pages} />
			</div>
			<div className="py-8 pt-6 gap-10 flex flex-col">
				<img
					src={course.thumbnail}
					alt={course.name}
					className="w-full h-auto lg:h-[50vh] object-fill lg:object-cover rounded-3xl"
				/>
				<div className="flex md:flex-row flex-col justify-between gap-8 items-start">
					<MainSection {...course} />
					<RightSection
						time={course.schedule.split(",")[1]}
						scheduleDay={course.schedule.split(",")[0]}
						courseId={course.id}
						{...course}
					/>
				</div>
				<Syllabus
					syllabus={course.syllabus}
					courseId={course.id}
					onToggleComplete={handleToggleComplete}
					completed={syllabusProgress}
				/>
			</div>
		</Container>
	);
};

export default CourseDetail;
