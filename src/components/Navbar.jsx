import searchIcon from "../assets/search.svg";
const Navbar = () => {
	return (
		<div className="flex items-center justify-between navbar--shadow md:mx-side p-4">
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
			{/* Login and signup button in flex */}
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
