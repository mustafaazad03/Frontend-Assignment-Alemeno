import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import EnrollmentForm from "./EnrollmentForm";
import ActionButtons from "./ActionButton";
import CourseOverview from "./CourseOverview";
import EnrollmentBadge from "./EnrollmentBadge";
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
			<ActionButtons isEnrolled={isEnrolled} onEnroll={handleEnroll} />
			<CourseOverview
				time={time}
				scheduleDay={scheduleDay}
				duration={duration}
				location={location}
			/>
			<EnrollmentBadge enrollmentStatus={enrollmentStatus} />
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
