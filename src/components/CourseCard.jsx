import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { selectCourse } from "../redux/courseContext";
import { UserIcon } from "@heroicons/react/20/solid";

const CourseCard = ({
	id,
	thumbnail,
	name,
	enrollmentStatus,
	instructor,
	progress = 0,
}) => {
	const dispatch = useDispatch();

	const handleSelectCourse = () => {
		dispatch(selectCourse(id));
	};

	return (
		<Link
			to={`/course/${id}`}
			onClick={handleSelectCourse}
			className="w-full inline-flex flex-col gap-2 h-80"
		>
			<div className="w-full h-fit rounded-3xl relative">
				<img
					src={thumbnail}
					alt={name}
					loading="lazy"
					className="w-full h-full object-cover md:object-contain xl:object-cover rounded-3xl"
				/>
				<div
					className="absolute bottom-0 h-2 bg-primary rounded-b-3xl"
					style={{ width: `${progress}%` }}
				></div>
			</div>
			<h3 className="font-bold mx-4">{name}</h3>
			<div className="flex items-center gap-1 mx-4">
				<UserIcon className="h-5 w-6 text-dark/70" />
				<p className="text-sm">{instructor}</p>
			</div>
			<p className="text-sm w-full mx-4">
				<span
					className={
						enrollmentStatus === "Open"
							? "text-green-500 font-bold"
							: enrollmentStatus === "Closed"
							? "text-red-500"
							: "text-yellow-500"
					}
				>
					{enrollmentStatus}
				</span>
			</p>
		</Link>
	);
};

export default CourseCard;

CourseCard.propTypes = {
	id: PropTypes.number.isRequired,
	thumbnail: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	enrollmentStatus: PropTypes.string.isRequired,
	instructor: PropTypes.string.isRequired,
	progress: PropTypes.number,
};
