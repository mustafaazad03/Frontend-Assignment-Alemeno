import SuggestionItem from "./SuggestionItem";
import PropTypes from "prop-types";

const SuggestionsList = ({ suggestions, threshold }) => {
	return (
		<ul
			className={`absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-[50vw] left-1/2 -translate-x-1/2 shadow-lg ${
				suggestions.length > threshold ? "max-h-96 overflow-y-auto" : ""
			}`}
		>
			{suggestions?.map((course) => (
				<SuggestionItem key={course.id} {...course} />
			))}
		</ul>
	);
};

export default SuggestionsList;

SuggestionsList.propTypes = {
	suggestions: PropTypes.array.isRequired,
	threshold: PropTypes.number.isRequired,
};
