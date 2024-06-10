import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	const [isModalOpen, setIsModalOpen] = useState(isOpen);

	const closeModal = () => {
		setIsModalOpen(false);
		onClose();
	};

	return (
		<div
			className={`fixed z-0 w-full h-full backdrop-blur ${
				isModalOpen ? "" : "hidden"
			}`}
		>
			<div className="absolute bg-black opacity-50" onClick={closeModal}></div>
			<div className="bg-white p-8 max-w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
				<div className="flex justify-end">
					<button onClick={closeModal}>
						<XMarkIcon className="h-6 w-6" />
					</button>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Modal;
