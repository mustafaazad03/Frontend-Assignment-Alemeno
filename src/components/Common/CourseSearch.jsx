import { useState, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import useDebounce from "../../hooks/use-debounce";
import SearchInput from "./Search/SearchInput";
import SuggestionsList from "./Search/SuggestionList";
import { filterCourses } from "../../utils/stringFunction";

const SCROLLABLE_THRESHOLD = 5;

const CourseSearch = () => {
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query, 300);
	const courses = useSelector((state) => state.course?.courses ?? []);

	const suggestions = useMemo(() => {
		if (!debouncedQuery) return [];

		return filterCourses(debouncedQuery, courses);
	}, [debouncedQuery, courses]);

	const handleInputChange = useCallback((e) => {
		if (e.target.value.trim() === "") {
			setQuery("");
			return;
		}
		setQuery(e.target.value);
	}, []);

	return (
		<div className="relative w-fit hidden sm:block">
			<SearchInput query={query} onChange={handleInputChange} />
			{suggestions.length > 0 && (
				<SuggestionsList
					suggestions={suggestions}
					threshold={SCROLLABLE_THRESHOLD}
				/>
			)}
		</div>
	);
};

export default CourseSearch;
