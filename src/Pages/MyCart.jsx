import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import CartProduct from "../Components/CartProduct";

const MyCart = () => {
  const { cartProducts } = useContext(AuthContext);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto my-16">
        {cartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct._id}
            cartProduct={cartProduct}
          ></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
