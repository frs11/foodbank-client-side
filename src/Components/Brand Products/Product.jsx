import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ brandedProduct }) => {
  const { _id, name, brand, image, type, price, ratting } =
    brandedProduct || {};

  return (
    <div className="">
      <div className="flex justify-center">
        <img src={image} alt="Product Image" className="h-[200px] rounded-lg" />
      </div>

      <div className="overflow-x-auto my-4">
        <table className="table table-zebra">
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="font-bold">Name</td>
              <td>:</td>
              <td>{name}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="font-bold">Brand: </td>
              <td>:</td>
              <td>{brand}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="font-bold">Type: </td>
              <td>:</td>
              <td>{type}</td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="font-bold">Ratting: </td>
              <td>:</td>
              <td>{ratting}</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td className="font-bold">Price: </td>
              <td>:</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Link to={`/products/${_id}`}>
          <button className="w-full btn bg-green-400 hover:btn-outline">
            Details
          </button>
        </Link>
        <Link to={`/products/update/${_id}`}>
          <button className="w-full btn btn-outline border border-green-600">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  brandedProduct: PropTypes.object.isRequired,
};

export default Product;
