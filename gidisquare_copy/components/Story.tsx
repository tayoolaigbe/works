const Story = () => {
	return (
		<section className="bg-[#f6ebe7] py-14">
			<div className="max-w-screen-xl mx-auto md:px-8">
				<div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
					<div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
						<h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
							Our Story
						</h2>
						<p className="mt-3 text-gray-600">
							We started as a small beauty studio in Islington, London. Our main
							idea was to create the best beauty studio in the world. Can there
							be compromises in the best studio in the world? Our answer is
							always no, we care about the best quality, we hire the best
							specialists and provide the best customer service. This approach
							allowed us to grow and create awesome team that is passionate
							about everything we do.
						</p>
						<button className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700">
							Learn More
						</button>
					</div>
					<div className="flex-1 ml-16 mt-16 sm:hidden lg:block">
						<img
							src="/founder_pix.jpg"
							className="md:max-w-lg sm:rounded-lg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
