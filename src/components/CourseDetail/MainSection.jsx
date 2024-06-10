import { UserIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MainSection = () => {
	const [browseMore, setBrowseMore] = useState(false);
	const para =
		"This course is designed for beginners who want to get started with Vue JS. You will learn Vue JS from scratch and build a simple application. The course covers the basics of Vue JS, including components, directives, and state management. By the end of the course, you will have a solid understanding of Vue JS and be able to build your own applications.";
	return (
		<div className="flex flex-col gap-7 w-full md:w-3/5">
			<div className="flex flex-col md:flex-row md:items-center justify-between">
				<h2 className="font-bold text-2xl uppercase">VUE JS SCRATCH COURSE</h2>
				<div className="flex items-center space-x-2">
					<UserIcon className="h-6 w-6" />
					<p className="text-sm text-primary font-semibold">John Doe</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="font-bold text-sm md:text-base">About Course</h3>
				<p className="text-dark text-sm md:text-base">
					{para.length > 100 && !browseMore ? para.slice(0, 100) + "..." : para}
				</p>
				{para.length > 100 && (
					<button
						className="text-dark flex items-center space-x-1"
						onClick={() => setBrowseMore(!browseMore)}
					>
						<span>Browse More</span>
						<ChevronDownIcon className="w-5 h-5" />
					</button>
				)}
			</div>
		</div>
	);
};

export default MainSection;
