import PropTypes from "prop-types";
const CourseDetail = ({ id }) => {
	console.log(id);
	return <div></div>;
};

export default CourseDetail;

CourseDetail.propTypes = {
	id: PropTypes.string.isRequired,
};
