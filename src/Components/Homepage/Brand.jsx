import PropTypes from "prop-types";
const Brand = ({ brand }) => {
  return (
    <div className="px-2 py-2 rounded-md bg-slate-200 shadow-md">
      <div className="">
        <img className="w-[75%] h-44 mx-auto" src={brand.brand_image} alt="" />
      </div>
      <h1 className="text-center text-xl font-medium">{brand.brand_name}</h1>
    </div>
  );
};
Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
