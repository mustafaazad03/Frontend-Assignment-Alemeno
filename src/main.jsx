import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <div>Home not found</div>,
	},
	{
		// dynamic route for course detail page
		path: "/course/:id",
		element: <CourseDetail id="1" />,
		errorElement: <div>Course not found</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
