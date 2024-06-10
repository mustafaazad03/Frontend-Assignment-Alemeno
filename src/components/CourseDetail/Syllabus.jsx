import SingleSyllabus from "./SingleSyllabus";
import PropTypes from "prop-types";

const Syllabus = ({ courseId, syllabus, onToggleComplete, completed }) => {
	return (
		<div className="flex flex-col gap-6 w-full">
			<h3 className="font-bold text-sm md:text-base">Syllabus</h3>
			<div className="gap-4 flex flex-col">
				{syllabus?.map((item, index) => (
					<SingleSyllabus
						key={index}
						courseId={courseId}
						{...item}
						onToggleComplete={onToggleComplete}
						completed={completed[index]}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

Syllabus.propTypes = {
	syllabus: PropTypes.arrayOf(
		PropTypes.shape({
			topic: PropTypes.string.isRequired,
			week: PropTypes.number.isRequired,
			content: PropTypes.string.isRequired,
		})
	).isRequired,
	onToggleComplete: PropTypes.func.isRequired,
	courseId: PropTypes.number.isRequired,
	completed: PropTypes.array.isRequired,
};

export default Syllabus;
