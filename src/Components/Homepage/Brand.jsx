import PropTypes from "prop-types";
const Brand = ({ brand }) => {
  return (
    <div className="px-2 h-72 py-2 rounded-md bg-slate-200 shadow-md">
      <div className="">
        <img
          className="w-[75%] ease-in-out duration-300 hover:w-[80%] hover:h-56 h-52 my-4 mx-auto"
          src={brand.brand_image}
          alt=""
        />
      </div>
      <h1 className="text-center text-xl mt-4 font-medium hover:underline">
        {brand.brand_name}
      </h1>
    </div>
  );
};
Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
