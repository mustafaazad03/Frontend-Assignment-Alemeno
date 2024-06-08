import PropTypes from "prop-types";
const Container = ({ children }) => {
	return (
		<div className="xl:max-w-7xl lg:max-w-4xl sm:max-w-lg max-w-[90%] mx-auto h-auto py-8">
			{children}
		</div>
	);
};

export default Container;

Container.propTypes = {
	children: PropTypes.node,
};
