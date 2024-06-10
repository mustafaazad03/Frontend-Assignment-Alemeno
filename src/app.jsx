import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeEnrolledCourses } from "./redux/courseContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <div>Home not found</div>,
	},
	{
		path: "/course/:id",
		element: <CourseDetail />,
		lazy: () => import("./pages/CourseDetail"),
		errorElement: <div>Course not found</div>,
	},
]);

export const AppInitializer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeEnrolledCourses());
	}, [dispatch]);

	return <RouterProvider router={router} />;
};
