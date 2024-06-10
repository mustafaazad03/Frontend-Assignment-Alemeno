import {
	CalendarDaysIcon,
	ClockIcon,
	FilmIcon,
	HeartIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";

const RightSection = () => {
	return (
		<div className="flex flex-col gap-6 w-full md:w-auto">
			<div className="flex md:flex-col gap-4 w-full">
				<button
					type="button"
					className="py-3 px-6 bg-primary border border-primary hover:bg-transparent text-white hover:text-primary rounded-2xl flex items-center justify-center w-1/2 md:w-auto"
				>
					<span className="font-bold">Enroll Now</span>
				</button>
				<button
					type="button"
					className="py-3 px-6 bg-white border border-dark text-dark hover:bg-slate-100 rounded-2xl flex items-center justify-center gap-3 w-1/2 md:w-auto"
				>
					<HeartIcon className="h-6 w-6" />
					<span className="font-bold">Like</span>
				</button>
			</div>
			<div className="flex flex-col justify-start gap-3 text-dark/90 text-sm">
				<div className="flex gap-4 items-center">
					<ClockIcon className="h-6 w-6" />
					<span className="">6:00 PM - 8:00 PM</span>
				</div>
				<div className="flex gap-4 items-center">
					<CalendarDaysIcon className="h-6 w-6" />
					<span className="">Every Monday, Wednesday, Friday</span>
				</div>
				<div className="flex gap-4 items-center">
					<FilmIcon className="h-6 w-6" />
					<span className="">8 Weeks</span>
				</div>
				<div className="flex gap-4 items-center">
					<MapPinIcon className="h-6 w-6" />
					<span className="">Online</span>
				</div>
				<div
					className={`flex gap-4 items-center rounded-2xl p-1 px-2 bg-primary text-white font-bold w-fit`}
				>
					Open
				</div>
			</div>
		</div>
	);
};

export default RightSection;
