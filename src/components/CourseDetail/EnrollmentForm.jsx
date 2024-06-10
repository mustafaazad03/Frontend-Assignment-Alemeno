import PropTypes from "prop-types";
import { useState } from "react";

const EnrollmentForm = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ name, email });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 z-10">
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
					required
				/>
			</div>
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
					required
				/>
			</div>
			<button
				type="submit"
				className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
			>
				Enroll
			</button>
		</form>
	);
};

EnrollmentForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default EnrollmentForm;
