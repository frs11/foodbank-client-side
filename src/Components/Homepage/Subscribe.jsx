const Subscribe = () => {
  return (
    <div className="subscribeBg flex flex-col lg:flex-row justify-center space-y-4 md:justify-evenly items-center w-10/12 mx-auto my-14 text-white h-[300px]">
      <div className="ml-5 text-center">
        <h1 className="text-3xl font-sans font-thin">Stay Connected</h1>
        <h1 className="text-4xl font-medium">
          Subscribe <span className="font-thin text-green-400">Newsletter</span>
        </h1>
      </div>
      <div className="lg:mr-8">
        <input
          className="w-full lg:w-[300px] py-2 px-5 rounded-full"
          placeholder="Enter Your Email"
          type="email"
          name=""
          id=""
        />
        <div className="flex justify-center mt-4">
          <button className=" px-5 mx-auto py-2 bg-green-600 hover:bg-green-700 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
