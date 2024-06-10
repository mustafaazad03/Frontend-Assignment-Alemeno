import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	courses: [],
	selectedCourse: null,
};

const courseContext = createSlice({
	name: "course",
	initialState,
	reducers: {
		setCourses(state, action) {
			state.courses = action.payload;
		},
		selectCourse(state, action) {
			state.selectedCourse = state.courses.find(
				(course) => course.id === action.payload
			);
		},
	},
});

export const { setCourses, selectCourse } = courseContext.actions;

export default courseContext.reducer;