import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import CartProduct from "../Components/CartProduct";

const MyCart = () => {
  const { user, cartProducts } = useContext(AuthContext);

  const filteredProduct = cartProducts?.filter(
    (cartProduct) => cartProduct.user == user.email
  );

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold my-10">
        Your Cart Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto my-16">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((cartProduct) => (
            <CartProduct
              key={cartProduct._id}
              cartProduct={cartProduct}
            ></CartProduct>
          ))
        ) : (
          <p className="text-3xl mt-8 text-center font-semibold md:col-span-2 lg:col-span-3">
            Cart Empty
          </p>
        )}
      </div>
    </div>
  );
};

export default MyCart;
