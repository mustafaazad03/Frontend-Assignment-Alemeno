import PropTypes from "prop-types";
import { UserIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MainSection = ({ name, instructor, description, prerequisites }) => {
	const [browseMore, setBrowseMore] = useState(false);
	return (
		<div className="flex flex-col gap-7 w-full md:w-3/5">
			<div className="flex flex-col md:flex-row md:items-center justify-between">
				<h2 className="font-bold text-2xl uppercase">{name}</h2>
				<div className="flex items-center space-x-2">
					<UserIcon className="h-6 w-6" />
					<p className="text-sm text-primary font-semibold">{instructor}</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="font-bold text-sm md:text-base">About Course</h3>
				<p className="text-dark text-sm md:text-base">
					{description.length > 400 && !browseMore
						? description.slice(0, 400) + "..."
						: description}
				</p>
				{description.length > 400 && (
					<button
						className="text-dark flex items-center space-x-1"
						onClick={() => setBrowseMore(!browseMore)}
					>
						<span>Browse More</span>
						<ChevronDownIcon className="w-5 h-5" />
					</button>
				)}
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="font-bold text-sm md:text-base">Prerequisites</h3>
				<ul className="list-disc list-inside text-dark text-sm md:text-base capitalize">
					{prerequisites.map((prerequisite, index) => (
						<li key={index}>{prerequisite}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MainSection;

MainSection.propTypes = {
	name: PropTypes.string.isRequired,
	instructor: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	prerequisites: PropTypes.array.isRequired,
};
