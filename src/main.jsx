import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <div>Home not found</div>,
	},
	{
		path: "/course/:id",
		element: <CourseDetail />,
		errorElement: <div>Course not found</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
