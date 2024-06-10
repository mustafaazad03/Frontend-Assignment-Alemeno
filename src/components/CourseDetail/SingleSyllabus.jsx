import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PropTypes from "prop-types";

const SingleSyllabus = ({ topic, week, content }) => {
	const [showSyllabusPara, setShowSyllabusPara] = useState(false);
	return (
		<>
			<button
				type="button"
				className="px-8 py-3 flex justify-between items-center text-dark border border-dark rounded-3xl w-full text-sm md:text-base hover:bg-slate-100 transition-all duration-300 ease-in-out"
				onClick={() => setShowSyllabusPara(!showSyllabusPara)}
			>
				<span className="">
					Week {week}: {topic}
				</span>
				<ChevronDownIcon className="w-5 h-5" />
			</button>
			{showSyllabusPara && (
				<div className="px-8 py-3">
					<p className="text-dark text-sm">{content}</p>
				</div>
			)}
		</>
	);
};

export default SingleSyllabus;

SingleSyllabus.propTypes = {
	topic: PropTypes.string.isRequired,
	week: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
