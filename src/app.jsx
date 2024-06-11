import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeEnrolledCourses } from "./redux/courseContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Dashboard from "./pages/Dashboard";

// Define the routes for the application
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/course/:id",
		element: <CourseDetail />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/*",
		element: <Home />,
	},
]);

export const AppInitializer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		try {
			dispatch(initializeEnrolledCourses());
		} catch (error) {
			console.error("Failed to initialize enrolled courses:", error);
		}
	}, [dispatch]);

	return <RouterProvider router={router} />;
};
