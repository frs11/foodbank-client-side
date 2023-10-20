import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Brand = ({ brand }) => {
  return (
    <div className="px-2 h-[340px] py-2 rounded-md bg-slate-200 shadow-md">
      <Link to={`/brands/${brand.brand_code}`}>
        <div className="">
          <img
            className="w-[70%] ease-in-out duration-300 hover:w-[75%] hover:h-[260px] h-[240px] my-4 mx-auto"
            src={brand.brand_image}
            alt=""
          />
        </div>
        <h1 className="text-center text-xl mt-4 font-medium hover:underline">
          {brand.brand_name}
        </h1>
      </Link>
    </div>
  );
};
Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
