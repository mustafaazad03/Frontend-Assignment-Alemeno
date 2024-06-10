import { useState, useCallback } from "react";
import {
	CalendarDaysIcon,
	ClockIcon,
	FilmIcon,
	HeartIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import Modal from "./Modal";
import EnrollmentForm from "./EnrollmentForm";
import { useDispatch, useSelector } from "react-redux";
import { addStudentToCourse } from "../../redux/courseContext";

const RightSection = ({
	time,
	scheduleDay,
	duration,
	location,
	enrollmentStatus,
	courseId,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	const enrolledCourses = useSelector((state) => state.course.enrolledCourses);
	const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;

	const isEnrolled = enrolledCourses.some(
		(course) => course.courseId === courseId
	);

	const handleEnroll = useCallback(() => {
		if (userInfo && userInfo.name && userInfo.email) {
			dispatch(
				addStudentToCourse({
					courseId,
					student: userInfo,
				})
			);
		} else {
			setIsModalOpen(true);
		}
	}, [courseId, dispatch, userInfo]);

	const handleFormSubmit = (student) => {
		dispatch(addStudentToCourse({ courseId, student }));
		localStorage.setItem("userInfo", JSON.stringify(student));
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-col gap-6 w-full md:w-auto lg:w-5/12">
			<div className="flex md:flex-col gap-4 w-full">
				<button
					type="button"
					onClick={handleEnroll}
					className="py-3 px-6 bg-primary border border-primary hover:bg-transparent text-white hover:text-primary rounded-2xl flex items-center justify-center w-1/2 md:w-auto disabled:hover:bg-primary disabled:cursor-not-allowed disabled:bg-primary/80 disabled:text-white disabled:opacity-80"
					disabled={isEnrolled}
				>
					<span className="font-bold">
						{isEnrolled ? "Enrolled" : "Enroll Now"}
					</span>
				</button>
				<button
					type="button"
					className="py-3 px-6 bg-white border border-dark text-dark hover:bg-slate-100 rounded-2xl flex items-center justify-center gap-3 w-1/2 md:w-auto"
				>
					<HeartIcon className="h-6 w-6" />
					<span className="font-bold">Like</span>
				</button>
			</div>
			<div className="flex flex-col justify-start gap-3 text-dark/90 text-sm">
				<div className="flex gap-4 items-center">
					<ClockIcon className="h-6 w-6" />
					<span className="">{time}</span>
				</div>
				<div className="flex gap-4 items-center">
					<CalendarDaysIcon className="h-6 w-6" />
					<span className="">{scheduleDay}</span>
				</div>
				<div className="flex gap-4 items-center">
					<FilmIcon className="h-6 w-6" />
					<span className="">{duration}</span>
				</div>
				<div className="flex gap-4 items-center">
					<MapPinIcon className="h-6 w-6" />
					<span className="">{location}</span>
				</div>
				<div
					className={`flex gap-4 items-center rounded-2xl p-1 px-2 ${
						enrollmentStatus === "Open"
							? "bg-green-100 text-green-500"
							: enrollmentStatus === "Closed"
							? "bg-red-100 text-red-500"
							: "bg-yellow-100 text-yellow-500"
					} font-bold w-fit`}
				>
					{enrollmentStatus}
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">
					Student Enrollment
				</h2>
				<EnrollmentForm onSubmit={handleFormSubmit} />
			</Modal>
		</div>
	);
};

RightSection.propTypes = {
	time: PropTypes.string.isRequired,
	scheduleDay: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	enrollmentStatus: PropTypes.string.isRequired,
	courseId: PropTypes.number.isRequired,
};

export default RightSection;
