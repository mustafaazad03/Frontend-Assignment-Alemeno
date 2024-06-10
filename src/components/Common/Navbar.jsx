import { useState, useEffect, useCallback } from "react";
import searchIcon from "../../assets/search.svg";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

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

	return (
		<div
			className={`flex items-center justify-between navbar--shadow p-4 pb-2 px-[8%] fixed top-0 left-0 right-0 transition-transform duration-300 bg-white ${
				showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
			}`}
		>
			<a href="/">
				<h3 className="font-bold">Courses</h3>
			</a>
			<div className="sm:flex relative items-center md:w-2/5 w-1/2 hidden">
				<input
					type="text"
					placeholder="Search"
					name="search"
					className="p-2 border border-gray-300 rounded-lg bg-slate-50 pl-8 w-full placeholder:gray-500 focus:outline-none"
				/>
				<img src={searchIcon} alt="search" className="absolute right-3" />
			</div>
			<div className="flex items-center space-x-3 text-white">
				<button
					type="button"
					className="px-4 py-2 bg-primary rounded-lg border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out sm:flex hidden"
				>
					Login
				</button>
				<button
					type="button"
					className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
				>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Navbar;