const Banner = () => {
  return (
    <div className="mx-0 my-0">
      <div className="headerbg w-full h-[400px] lg:h-[600px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl dark:text-slate-300 text-white lg:text-5xl font-semibold">
            <span>
              Feeling <span className="text-green-400">Hungry</span> for food?
              <br /> <span className="mt-10">Order your desired food</span>{" "}
              <br /> from <span className="text-green-400">FoodBank</span>
            </span>
          </h1>
          <div>
            <p className="text-gray-300 text-xs dark:text-slate-300 lg:text-sm mx-auto mt-8 w-72 lg:w-96">
              We provide all kind of fresh and best quality food all over the
              country. You need best quality food? we got it covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
