import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseContext";

export const store = configureStore({
	reducer: {
		course: courseReducer,
	},
});
