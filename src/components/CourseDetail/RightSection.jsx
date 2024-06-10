import {
	CalendarDaysIcon,
	ClockIcon,
	FilmIcon,
	HeartIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const RightSection = ({
	time,
	scheduleDay,
	duration,
	location,
	enrollmentStatus,
}) => {
	return (
		<div className="flex flex-col gap-6 w-full md:w-auto lg:w-5/12">
			<div className="flex md:flex-col gap-4 w-full">
				<button
					type="button"
					className="py-3 px-6 bg-primary border border-primary hover:bg-transparent text-white hover:text-primary rounded-2xl flex items-center justify-center w-1/2 md:w-auto"
				>
					<span className="font-bold">Enroll Now</span>
				</button>
				<button
					type="button"
					className="py-3 px-6 bg-white border border-dark text-dark hover:bg-slate-100 rounded-2xl flex items-center justify-center gap-3 w-1/2 md:w-auto"
				>
					<HeartIcon className="h-6 w-6" />
					<span className="font-bold">Like</span>
				</button>
			</div>
			<div className="flex flex-col justify-start gap-3 text-dark/90 text-sm">
				<div className="flex gap-4 items-center">
					<ClockIcon className="h-6 w-6" />
					<span className="">{time}</span>
				</div>
				<div className="flex gap-4 items-center">
					<CalendarDaysIcon className="h-6 w-6" />
					<span className="">{scheduleDay}</span>
				</div>
				<div className="flex gap-4 items-center">
					<FilmIcon className="h-6 w-6" />
					<span className="">{duration}</span>
				</div>
				<div className="flex gap-4 items-center">
					<MapPinIcon className="h-6 w-6" />
					<span className="">{location}</span>
				</div>
				<div
					className={`flex gap-4 items-center rounded-2xl p-1 px-2 ${
						enrollmentStatus === "Open"
							? "bg-green-100 text-green-500"
							: enrollmentStatus === "Closed"
							? "bg-red-100 text-red-500"
							: "bg-yellow-100 text-yellow-500"
					} font-bold w-fit`}
				>
					{enrollmentStatus}
				</div>
			</div>
		</div>
	);
};

export default RightSection;

RightSection.propTypes = {
	time: PropTypes.string.isRequired,
	scheduleDay: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	enrollmentStatus: PropTypes.string.isRequired,
};
