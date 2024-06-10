import PropTypes from "prop-types";

const EnrollmentBadge = ({ enrollmentStatus }) => {
	const statusClasses = {
		Open: "bg-green-100 text-green-500",
		Closed: "bg-red-100 text-red-500",
		Waitlist: "bg-yellow-100 text-yellow-500",
	};

	return (
		<div
			className={`flex gap-4 items-center rounded-2xl p-1 px-2 ${statusClasses[enrollmentStatus]} font-bold w-fit`}
		>
			{enrollmentStatus}
		</div>
	);
};

EnrollmentBadge.propTypes = {
	enrollmentStatus: PropTypes.string.isRequired,
};

export default EnrollmentBadge;
