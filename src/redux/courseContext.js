import { createSlice } from "@reduxjs/toolkit";
import data from "../data/course.json";

const initialState = {
	courses: data.map((course) => ({
		...course,
		students: course.students || [],
	})),
	selectedCourse: null,
	enrolledCourses: JSON.parse(localStorage.getItem("enrolledCourses")) || [],
};

const courseContext = createSlice({
	name: "course",
	initialState,
	reducers: {
		setCourses(state, action) {
			state.courses = action.payload;
		},
		selectCourse(state, action) {
			const course = state.courses.find(
				(course) => course.id === action.payload
			);
			if (course) {
				const storedStudents =
					JSON.parse(localStorage.getItem("students")) || {};
				const studentsForCourse = storedStudents[action.payload] || [];
				state.selectedCourse = { ...course, students: studentsForCourse };
			}
		},
		addStudentToCourse(state, action) {
			const { courseId, student } = action.payload;
			const course = state.courses.find((course) => course.id === courseId);
			if (course) {
				course.students.push(student);
				if (state.selectedCourse && state.selectedCourse.id === courseId) {
					state.selectedCourse.students = course.students;
				}
				// Initialize progress for the new course enrollment
				state.enrolledCourses.push({
					courseId,
					progress: 0,
					syllabusProgress: course.syllabus.map(() => false),
				});
				localStorage.setItem(
					"enrolledCourses",
					JSON.stringify(state.enrolledCourses)
				);
			}
		},
		initializeEnrolledCourses(state) {
			const enrolledCourses =
				JSON.parse(localStorage.getItem("enrolledCourses")) || [];
			state.enrolledCourses = enrolledCourses;
		},
		updateCourseProgress(state, action) {
			const { courseId, progress } = action.payload;
			const enrolledCourse = state.enrolledCourses.find(
				(course) => course.courseId === courseId
			);
			if (enrolledCourse) {
				enrolledCourse.progress = progress;
				localStorage.setItem(
					"enrolledCourses",
					JSON.stringify(state.enrolledCourses)
				);
			}
		},
		updateSyllabusProgress(state, action) {
			const { courseId, syllabusIndex, isComplete } = action.payload;
			const enrolledCourse = state.enrolledCourses.find(
				(course) => course.courseId === courseId
			);
			if (enrolledCourse) {
				enrolledCourse.syllabusProgress[syllabusIndex] = isComplete;
				// Recalculate the overall course progress
				const completedItems =
					enrolledCourse.syllabusProgress.filter(Boolean).length;
				enrolledCourse.progress = Math.round(
					(completedItems / enrolledCourse.syllabusProgress.length) * 100
				);
				localStorage.setItem(
					"enrolledCourses",
					JSON.stringify(state.enrolledCourses)
				);
			}
		},
	},
});

export const {
	setCourses,
	selectCourse,
	addStudentToCourse,
	initializeEnrolledCourses,
	updateCourseProgress,
	updateSyllabusProgress,
} = courseContext.actions;

export default courseContext.reducer;
