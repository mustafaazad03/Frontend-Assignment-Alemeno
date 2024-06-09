const Hero = () => {
	return (
		<div className="h-[30vh] rounded-2xl w-full bg-orangeBg flex items-center relative mt-10">
			<div className="flex flex-col items-start md:w-1/2 w-3/5 pl-4 text-dark h-full justify-center gap-2 z-[2]">
				<h1 className="font-bold break-words flex-wrap flex text-2xl">
					Learn something new everyday.
				</h1>
				<p className="text-xs">
					Become professionals and ready to join the world.
				</p>
				<button className="p-2 px-4 font-bold inline-flex items-center align-middle bg-white rounded-xl text-sm hover:bg-transparent border-white border hover:text-white">
					Explore React Native
				</button>
			</div>
			<div className="h-full w-1/5 hero__gradient absolute left-1/2 z-[1]"></div>
			<div className="w-2/5 h-full bg-[url('/HeaderImage.png')] bg-cover absolute right-0 rounded-r-[16px] overflow-hidden">
				<div className="absolute bottom-0 hero__bg--gradient flex justify-between items-center left-4 w-full pl-2 pb-2">
					<div className="w-full flex space-x-2">
						<img
							src="/personImg.png"
							alt="person"
							className="w-6 h-6 rounded-full bg-white p-1"
						/>
						<div className="flex flex-col justify-start text-white">
							<p className="font-bold text-xs">Mustafa Azad</p>
							<h3 className="text-[8px]">React Native Developer</h3>
						</div>
					</div>
					<div className="sm:flex flex-col text-right hidden w-3/5 font-bold text-white relative right-6">
						<p className="text-xs">CEO of Mobile Verse</p>
						<h3 className="text-xs font-normal">Since 2015</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
