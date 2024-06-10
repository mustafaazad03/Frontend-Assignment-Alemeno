import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const SearchInput = ({ query, onChange }) => {
	return (
		<div className="flex relative items-center md:w-full w-1/2 mx-auto">
			<input
				type="text"
				placeholder="Search for courses..."
				value={query}
				onChange={onChange}
				className="p-2 border border-gray-300 rounded-lg bg-slate-50 pl-10 w-full placeholder-gray-500 focus:outline-none"
			/>
			<MagnifyingGlassCircleIcon className="absolute right-3 w-6 h-6 text-gray-500" />
		</div>
	);
};

export default SearchInput;

SearchInput.propTypes = {
	query: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
