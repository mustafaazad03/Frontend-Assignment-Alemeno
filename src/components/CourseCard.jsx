import { UserIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
const CourseCard = ({
	link,
	thumbnail,
	name,
	enrollmentStatus,
	instructor,
}) => {
	return (
		<a className="w-full inline-flex flex-col gap-2 h-80" href={link}>
			<div className="w-full h-3/4 rounded-3xl relative">
				<img
					src={thumbnail}
					alt={name}
					loading="lazy"
					className="w-full h-full object-cover md:object-contain xl:object-cover rounded-3xl"
				/>
				{/* Progress bar at bottom */}
				<div className="absolute bottom-0 w-full h-2 bg-white bg-opacity-40 rounded-b-3xl"></div>
			</div>
			<h3 className="font-bold mx-4">{name}</h3>
			<div className="flex items-center gap-1 mx-4">
				{/* Avatar svg */}
				<UserIcon className="w-5 h-5 text-primary" />
				{/* Instructor name */}
				<p className="text-sm">{instructor}</p>
			</div>
			{/* Course completed  */}
			<p className="text-sm w-full mx-4">
				<span
					className={`
				${
					enrollmentStatus === "Open"
						? "text-green-500 font-bold"
						: `${
								enrollmentStatus === "Closed"
									? "text-red-500"
									: "text-yellow-500"
						  }`
				}
				`}
				>
					{enrollmentStatus}
				</span>
			</p>
		</a>
	);
};

export default CourseCard;

CourseCard.propTypes = {
	link: PropTypes.string,
	thumbnail: PropTypes.string,
	name: PropTypes.string,
	creatorProfileImage: PropTypes.string,
	courseUpdate: PropTypes.string,
	enrollmentStatus: PropTypes.string,
	instructor: PropTypes.string,
};
