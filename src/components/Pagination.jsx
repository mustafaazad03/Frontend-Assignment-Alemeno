import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

const Pagination = ({ totalPages }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const page = parseInt(searchParams.get("page")) || 1;
		setCurrentPage(page);
	}, [location]);

	const handlePageChange = (page) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.set("page", page);
		navigate(location.pathname + "?" + searchParams.toString());
	};

	return (
		<nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-3">
			<div className="-mt-px flex w-0 flex-1">
				{currentPage > 1 && (
					<div
						onClick={() => handlePageChange(currentPage - 1)}
						className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-dark cursor-pointer"
					>
						<ArrowLongLeftIcon
							className="mr-3 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						Previous
					</div>
				)}
			</div>
			<div className="hidden md:-mt-px md:flex">
				{Array.from({ length: totalPages }, (_, index) => (
					<div
						key={index + 1}
						onClick={() => handlePageChange(index + 1)}
						className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium cursor-pointer ${
							currentPage === index + 1
								? "border-indigo-500 text-indigo-600"
								: "border-transparent text-gray-500 hover:border-gray-300 hover:text-dark"
						}`}
						aria-current={currentPage === index + 1 ? "page" : undefined}
					>
						{index + 1}
					</div>
				))}
			</div>
			<div className="-mt-px flex w-0 flex-1 justify-end">
				{currentPage < totalPages && (
					<div
						onClick={() => handlePageChange(currentPage + 1)}
						className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-dark cursor-pointer"
					>
						Next
						<ArrowLongRightIcon
							className="ml-3 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</div>
				)}
			</div>
		</nav>
	);
};

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
};

export default Pagination;
