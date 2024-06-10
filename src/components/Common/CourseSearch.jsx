import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import useDebounce from "../../hooks/use-debounce";
import SearchInput from "./Search/SearchInput";
import SuggestionsList from "./Search/SuggestionList";
import { normalizeString } from "../../utils/stringFunction";

const SCROLLABLE_THRESHOLD = 5;

const CourseSearch = () => {
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query, 300);
	const courses = useSelector((state) => state.course.courses);

	const suggestions = useMemo(() => {
		if (!debouncedQuery) return [];

		const normalizedQuery = normalizeString(debouncedQuery);
		const queryWords = normalizedQuery.split(/\s+/);

		return courses.filter((course) => {
			const normalizedCourseName = normalizeString(course.name);
			const normalizedInstructor = normalizeString(course.instructor);

			return queryWords.every(
				(word) =>
					normalizedCourseName.includes(word) ||
					normalizedInstructor.includes(word)
			);
		});
	}, [debouncedQuery, courses]);

	const handleInputChange = (e) => {
		if (e.target.value === "" || e.target.value === " ") {
			setQuery("");
			return;
		}
		setQuery(e.target.value);
	};

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
