import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Components/Brand Products/Product";

const BrandProducts = () => {
  const [brandedProducts, setBrandedProducts] = useState([]);
  const { brandCode } = useParams();
  const { brands, products } = useContext(AuthContext);
  // console.log(products);
  const selectedBrand = brands.find((brand) => brand.brand_code === brandCode);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.brand === selectedBrand.brand_name
    );
    setBrandedProducts(filteredProducts);
  }, [selectedBrand, products]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto my-16">
      {brandedProducts.map((brandedProduct) => (
        <Product
          key={brandedProduct._id}
          brandedProduct={brandedProduct}
        ></Product>
      ))}
    </div>
  );
};

export default BrandProducts;
