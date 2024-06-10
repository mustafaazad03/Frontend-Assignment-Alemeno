import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeEnrolledCourses } from "./redux/courseContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/course/:id",
		element: <CourseDetail />,
		lazy: () => import("./pages/CourseDetail"),
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		lazy: () => import("./pages/Dashboard"),
	},
	{
		path: "*",
		element: <Home />,
	},
]);

export const AppInitializer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeEnrolledCourses());
	}, [dispatch]);

	return <RouterProvider router={router} />;
};
