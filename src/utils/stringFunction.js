export const normalizeString = (str) => str.trim().toLowerCase();

export const filterCourses = (query, courses) => {
	const normalizedQuery = normalizeString(query);
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
};
