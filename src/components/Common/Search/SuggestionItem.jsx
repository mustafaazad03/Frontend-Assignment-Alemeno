import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SuggestionItem = ({ thumbnail, name, instructor, id }) => {
	return (
		<Link
			to={`/course/${id}`}
			className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
		>
			<img
				src={thumbnail}
				alt={name}
				loading="lazy"
				className="w-12 h-12 object-cover rounded-md mr-3"
			/>
			<div>
				<h4 className="font-medium text-gray-800">{name}</h4>
				<p className="text-sm text-gray-600">Instructor: {instructor}</p>
			</div>
		</Link>
	);
};

export default SuggestionItem;

SuggestionItem.propTypes = {
	thumbnail: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	instructor: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
