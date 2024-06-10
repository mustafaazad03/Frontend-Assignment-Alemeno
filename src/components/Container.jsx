import PropTypes from "prop-types";

const Container = ({ children }) => {
	return (
		<div className="xl:max-w-7xl lg:max-w-4xl max-w-[90%] mx-auto h-auto py-8 relative">
			{children}
		</div>
	);
};

export default Container;

Container.propTypes = {
	children: PropTypes.node,
};
