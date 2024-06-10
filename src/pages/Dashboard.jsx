import Container from "../components/Container";
import Breadcrum from "../components/CourseDetail/Breadcrum";
import Tabs from "../components/Dashboard/Tabs";

const Dashboard = () => {
	const pages = [{ name: "Dashboard", href: "/dashboard", current: true }];
	return (
		<Container>
			<div className="mt-16">
				<Breadcrum pages={pages} />
			</div>
			<h1 className="text-3xl font-bold mt-6 capitalize">
				Welcome to your dashboard
			</h1>
			<div className="py-6">
				<Tabs />
			</div>
		</Container>
	);
};

export default Dashboard;
