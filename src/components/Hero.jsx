const Hero = () => {
	return (
		<div className="h-[30vh] lg:h-[40vh] rounded-2xl w-full bg-orangeBg flex items-center relative mt-10">
			<div className="flex flex-col items-start md:w-1/2 w-3/5 pl-4 lg:pl-20 text-dark h-full justify-center gap-2 lg:gap-4 z-[2]">
				<h1 className="font-bold break-words flex-wrap flex text-2xl lg:text-4xl">
					Learn something new everyday.
				</h1>
				<p className="text-xs lg:text-base">
					Become professionals and ready to join the world.
				</p>
				<button className="p-2 px-4 font-bold inline-flex items-center align-middle bg-white rounded-xl text-sm hover:bg-transparent border-white border hover:text-white">
					Explore React Native
				</button>
			</div>
			<div className="h-full w-1/5 lg:w-1/6 hero__gradient absolute left-1/2 z-[1]"></div>
			<div className="w-2/5 lg:w-[45%] h-full bg-[url('/HeaderImage.png')] bg-cover absolute right-0 rounded-r-[16px] overflow-hidden">
				<div className="absolute bottom-0 hero__bg--gradient flex justify-between items-center left-4 lg:left-12 w-full pl-2 pb-2 lg:pb-4">
					<div className="w-full flex space-x-2 xl:ml-12">
						<img
							src="/personImg.png"
							alt="person"
							className="w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white p-1"
						/>
						<div className="flex flex-col justify-start text-white gap-1">
							<p className="font-bold text-xs lg:text-sm">Marinda Williams</p>
							<h3 className="text-[8px] lg:text-xs">React Native Developer</h3>
						</div>
					</div>
					<div className="sm:flex flex-col text-right hidden w-3/5 font-bold text-white relative right-6 lg:right-14 gap-1">
						<p className="font-semibold text-xs lg:text-sm">
							CEO of Mobile Verse
						</p>
						<h3 className="text-xs font-normal">Since 2015</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
