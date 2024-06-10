import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Tabs = () => {
	const location = useLocation();
	const [activeTab, setActiveTab] = useState("#all");

	// Define your tabs and their corresponding routes
	const tabs = [
		{ name: "All", href: "#all" },
		{ name: "In-Progress", href: "#progress" },
		{ name: "Completed", href: "#completed" },
	];

	// Update the active tab based on the URL
	useEffect(() => {
		const currentHash = location.hash || "#all";
		setActiveTab(currentHash);
	}, [location]);

	return (
		<div>
			{/* Mobile view: Select dropdown */}
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					id="tabs"
					name="tabs"
					className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary/80 focus:outline-none focus:ring-primary/80 sm:text-sm"
					value={activeTab}
					onChange={(e) => {
						const selectedTab = e.target.value;
						setActiveTab(selectedTab);
						window.location.hash = selectedTab;
					}}
				>
					{tabs.map((tab) => (
						<option key={tab.name} value={tab.href}>
							{tab.name}
						</option>
					))}
				</select>
			</div>

			{/* Desktop view: Tabs navigation */}
			<div className="hidden sm:block">
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex space-x-8" aria-label="Tabs">
						{tabs.map((tab) => (
							<Link
								key={tab.name}
								to={tab.href}
								className={`
									${
										activeTab === tab.href
											? "border-primary/70 text-primary"
											: "border-transparent text-dark/70 hover:border-dark/50 hover:text-dark"
									} whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium cursor-pointer`}
								aria-current={activeTab === tab.href ? "page" : undefined}
							>
								{tab.name}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
