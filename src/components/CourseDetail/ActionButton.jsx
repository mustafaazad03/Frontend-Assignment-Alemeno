import PropTypes from "prop-types";
import { HeartIcon } from "@heroicons/react/24/outline";

const ActionButtons = ({ isEnrolled, onEnroll }) => {
	return (
		<div className="flex md:flex-col gap-4 w-full">
			<button
				type="button"
				onClick={onEnroll}
				className="py-3 px-6 bg-primary border border-primary hover:bg-transparent text-white hover:text-primary rounded-2xl flex items-center justify-center w-1/2 md:w-auto disabled:hover:bg-primary disabled:cursor-not-allowed disabled:bg-primary/80 disabled:text-white disabled:opacity-80"
				disabled={isEnrolled}
			>
				<span className="font-bold">
					{isEnrolled ? "Enrolled" : "Enroll Now"}
				</span>
			</button>
			<button
				type="button"
				className="py-3 px-6 bg-white border border-dark text-dark hover:bg-slate-100 rounded-2xl flex items-center justify-center gap-3 w-1/2 md:w-auto"
			>
				<HeartIcon className="h-6 w-6" />
				<span className="font-bold">Like</span>
			</button>
		</div>
	);
};

ActionButtons.propTypes = {
	isEnrolled: PropTypes.bool.isRequired,
	onEnroll: PropTypes.func.isRequired,
};

export default ActionButtons;
