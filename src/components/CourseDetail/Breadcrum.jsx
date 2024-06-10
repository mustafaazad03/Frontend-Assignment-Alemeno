import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrum = ({ pages }) => {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-4">
				<li>
					<div>
						<Link to="/" className="text-dark/60 hover:text-dark">
							<HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
							<span className="sr-only">Home</span>
						</Link>
					</div>
				</li>
				{pages.map((page) => (
					<li key={page.name}>
						<div className="flex items-center">
							<ChevronRightIcon
								className="h-5 w-5 flex-shrink-0 text-dark/50"
								aria-hidden="true"
							/>
							<Link
								to={page.href}
								className="ml-4 text-sm font-medium text-dark/60 hover:text-dark"
								aria-current={page.current ? "page" : undefined}
							>
								{page.name}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrum;

Breadcrum.propTypes = {
	pages: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
			current: PropTypes.bool,
		})
	).isRequired,
};
