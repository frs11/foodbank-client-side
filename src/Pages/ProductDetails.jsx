import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { productId } = useParams();
  const { user, products, cartProducts } = useContext(AuthContext);
  const selectedProduct = products.find((product) => product._id == productId);

  const { name, brand, image, type, price, ratting, description } =
    selectedProduct;

  const handleAddToCart = () => {
    const newSelectedProduct = { ...selectedProduct };
    newSelectedProduct.user = user.email;

    const filteredProduct = cartProducts?.filter(
      (cartProduct) => cartProduct.user == user.email
    );
    const isExist = filteredProduct?.find(
      (product) => product._id === newSelectedProduct._id
    );
    if (isExist) {
      return Swal.fire({
        title: "Error!",
        text: "Product already exist",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      fetch("http://localhost:5000/cart/products", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newSelectedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Added to Cart Successfully",
              icon: "success",
              confirmButtonText: "Done",
            });
          }
        });
    }
  };
  return (
    <div className="w-10/12 lg:max-w-screen-2xl mx-auto my-10">
      <div className="flex justify-center">
        <img src={image} alt="" />
      </div>
      <div className="overflow-x-auto my-4 w-full lg:w-10/12 mx-auto">
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
            {/* row 6 */}
            <tr>
              <td className="font-bold">Description: </td>
              <td>:</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-8">
          <button
            onClick={handleAddToCart}
            className="w-full btn btn-outline border border-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
