import PropTypes from "prop-types";
const Container = ({ children }) => {
	return (
		<div className="xl:max-w-7xl lg:max-w-4xl sm:max-w-lg max-w-[90%]">
			{children}
		</div>
	);
};

export default Container;

Container.propTypes = {
	children: PropTypes.node,
};
