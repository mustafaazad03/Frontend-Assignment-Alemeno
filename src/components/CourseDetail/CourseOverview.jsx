import PropTypes from "prop-types";
import {
	ClockIcon,
	CalendarDaysIcon,
	FilmIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";

const CourseOverview = ({ time, scheduleDay, duration, location }) => {
	return (
		<div className="flex flex-col justify-start gap-3 text-dark/90 text-sm">
			<div className="flex gap-4 items-center">
				<ClockIcon className="h-6 w-6" />
				<span>{time}</span>
			</div>
			<div className="flex gap-4 items-center">
				<CalendarDaysIcon className="h-6 w-6" />
				<span>{scheduleDay}</span>
			</div>
			<div className="flex gap-4 items-center">
				<FilmIcon className="h-6 w-6" />
				<span>{duration}</span>
			</div>
			<div className="flex gap-4 items-center">
				<MapPinIcon className="h-6 w-6" />
				<span>{location}</span>
			</div>
		</div>
	);
};

CourseOverview.propTypes = {
	time: PropTypes.string.isRequired,
	scheduleDay: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};

export default CourseOverview;
