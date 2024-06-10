import SingleSyllabus from "./SingleSyllabus";
import PropTypes from "prop-types";

const Syllabus = ({ syllabus }) => {
	return (
		<div className="flex flex-col gap-6 w-full">
			<h3 className="font-bold text-sm md:text-base">Syllabus</h3>
			<div className="gap-4 flex flex-col">
				{syllabus?.map((item, index) => (
					<SingleSyllabus key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Syllabus;

Syllabus.propTypes = {
	syllabus: PropTypes.array,
};
