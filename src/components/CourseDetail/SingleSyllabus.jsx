import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const SingleSyllabus = ({
	topic,
	week,
	content,
	completed,
	onToggleComplete,
	index,
	courseId,
}) => {
	const [showContent, setShowContent] = useState(false);
	const [isCompleted, setIsCompleted] = useState(completed);
	const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;
	const enrolledCourses =
		JSON.parse(localStorage.getItem("enrolledCourses")) || [];

	const isEnrolled = enrolledCourses.find(
		(course) => course.courseId === courseId
	);

	useEffect(() => {
		const storedEnrolledCourses =
			JSON.parse(localStorage.getItem("enrolledCourses")) || [];
		const storedCourse = storedEnrolledCourses.find(
			(course) => course.courseId === courseId
		);

		if (storedCourse) {
			const updatedSyllabusProgress = [...storedCourse.syllabusProgress];
			updatedSyllabusProgress[index] = completed;
			const updatedCourseInfo = {
				...storedCourse,
				syllabusProgress: updatedSyllabusProgress,
			};

			const updatedEnrolledCourses = storedEnrolledCourses.map((course) =>
				course.courseId === courseId ? updatedCourseInfo : course
			);

			localStorage.setItem(
				"enrolledCourses",
				JSON.stringify(updatedEnrolledCourses)
			);
		}
	}, [courseId, index, completed]);

	const handleCheckboxChange = () => {
		setIsCompleted(!isCompleted);
		onToggleComplete(index, !completed);
	};

	return (
		<div className="overflow-hidden mb-4">
			<button
				type="button"
				className="flex justify-between items-center border border-dark bg-white hover:bg-gray-100 px-6 py-4 w-full text-sm md:text-base rounded-3xl"
				onClick={() => setShowContent(!showContent)}
			>
				<div className="flex items-center space-x-2">
					{isEnrolled && userInfo && (
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 text-primary"
							checked={isCompleted}
							onChange={handleCheckboxChange}
						/>
					)}
					<span className="font-semibold">Week {week}:</span>
					<span className="truncate">{topic}</span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-6 w-6 transform transition-transform ${
						showContent ? "rotate-180" : ""
					}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{showContent && (
				<div className="bg-white p-6">
					<p className="text-gray-700">{content}</p>
				</div>
			)}
		</div>
	);
};

SingleSyllabus.propTypes = {
	topic: PropTypes.string.isRequired,
	week: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onToggleComplete: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	courseId: PropTypes.number.isRequired,
};

export default SingleSyllabus;
