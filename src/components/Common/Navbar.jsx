import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CourseSearch from "./CourseSearch";
import Modal from "../CourseDetail/Modal";
import EnrollmentForm from "../CourseDetail/EnrollmentForm";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
		if (storedUserInfo) {
			setUserInfo(storedUserInfo);
		}
	}, []);

	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY) {
			setShowNavbar(false);
		} else {
			setShowNavbar(true);
		}
		setLastScrollY(currentScrollY);
	}, [lastScrollY]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll, lastScrollY]);

	const handleLoginSubmit = (user) => {
		localStorage.setItem("userInfo", JSON.stringify(user));
		setIsLoginModalOpen(false);
	};

	const handleSignupSubmit = (user) => {
		localStorage.setItem("userInfo", JSON.stringify(user));
		setIsSignupModalOpen(false);
	};

	return (
		<>
			<div
				className={`flex items-center justify-between navbar--shadow p-4 pb-2 px-[8%] fixed top-0 left-0 right-0 transition-transform duration-300 bg-white ${
					showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
				}`}
			>
				<Link to="/">
					<h3 className="font-bold">Courses</h3>
				</Link>
				<CourseSearch />
				<div className="flex items-center space-x-3 text-white">
					{userInfo ? (
						<button type="button">
							<Link
								to="/dashboard"
								className="bg-white font-medium border border-primary rounded-2xl p-2 px-4 text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out sm:flex hidden"
							>
								Dashboard
							</Link>
						</button>
					) : (
						<>
							<button
								type="button"
								className="px-4 py-2 bg-primary rounded-lg border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out sm:flex hidden"
								onClick={() => setIsLoginModalOpen(true)}
							>
								Login
							</button>
							<button
								type="button"
								className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
								onClick={() => setIsSignupModalOpen(true)}
							>
								Sign Up
							</button>
						</>
					)}
				</div>
			</div>
			{/* Login Modal */}
			<Modal
				isOpen={isLoginModalOpen}
				onClose={() => setIsLoginModalOpen(false)}
			>
				<h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">
					Login
				</h2>
				<EnrollmentForm onSubmit={handleLoginSubmit} />{" "}
			</Modal>

			{/* Signup Modal */}
			<Modal
				isOpen={isSignupModalOpen}
				onClose={() => setIsSignupModalOpen(false)}
			>
				<h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">
					Sign Up
				</h2>
				<EnrollmentForm onSubmit={handleSignupSubmit} />{" "}
			</Modal>
		</>
	);
};

export default Navbar;
