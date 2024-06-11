import PropTypes from "prop-types";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

const Container = ({ children }) => {
	return (
		<div className="xl:max-w-7xl lg:max-w-4xl max-w-[90%] mx-auto h-auto py-8 relative">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Container;

Container.propTypes = {
	children: PropTypes.node,
};
