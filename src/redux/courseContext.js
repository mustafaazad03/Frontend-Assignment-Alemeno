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
				// Load students from local storage if available
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
				state.enrolledCourses.push({ courseId });
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
	},
});

export const {
	setCourses,
	selectCourse,
	addStudentToCourse,
	initializeEnrolledCourses,
} = courseContext.actions;

export default courseContext.reducer;
