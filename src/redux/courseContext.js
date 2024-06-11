import { createSlice } from "@reduxjs/toolkit";
import data from "../data/course.json";

// Define the initial state of the course context
const initialState = {
	courses: data.map((course) => ({
		...course,
		students: course.students || [],
	})),
	selectedCourse: null,
	enrolledCourses: JSON.parse(localStorage.getItem("enrolledCourses")) || [],
};

// Create a slice for the course context
const courseContext = createSlice({
	name: "course",
	initialState,
	reducers: {
		// Define reducers for updating the course context
		setCourses(state, action) {
			// Validate the payload to ensure it is an array
			if (Array.isArray(action.payload)) {
				state.courses = action.payload;
			} else {
				console.error("Invalid payload for setCourses reducer");
			}
		},
		selectCourse(state, action) {
			// Validate the payload to ensure it is a number
			if (typeof action.payload === "number") {
				// Create a map of courses for easy lookup
				const courseMap = new Map(
					state.courses.map((course) => [course.id, course])
				);
				const course = courseMap.get(action.payload);
				if (course) {
					const storedStudents =
						JSON.parse(localStorage.getItem("students")) || {};
					const studentsForCourse = storedStudents[action.payload] || [];
					state.selectedCourse = { ...course, students: studentsForCourse };
				}
			} else {
				console.error("Invalid payload for selectCourse reducer");
			}
		},
		addStudentToCourse(state, action) {
			const { courseId, student } = action.payload;
			// Find the course in the list of courses
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
				// Update the syllabus progress for the course
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
