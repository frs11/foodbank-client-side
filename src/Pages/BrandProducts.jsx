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

  const advertisementProduct = brandedProducts.slice(0, 3);
  // console.log(advertisementProduct);
  const img1 = advertisementProduct?.find((img, idx) => idx == 0);
  const img3 = advertisementProduct?.find((img, idx) => idx == 1);
  const img2 = advertisementProduct?.find((img, idx) => idx == 2);

  // console.log(img1, img2, img3);
  console.log(brandedProducts);

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="carousel carousel-center rounded-box h-[200px] md:h-[300px] lg:h-[350px] mt-5 mx-auto">
          <div className="carousel-item border ml-2 border-slate-200 rounded-lg">
            {img1 ? (
              <img src={img1?.image} alt="" />
            ) : (
              <p className="font-semibold text-2xl flex items-center justify-center px-3">
                Coming Soon
              </p>
            )}
          </div>
          <div className="carousel-item border ml-2 border-slate-200 rounded-lg">
            {img2 ? (
              <img src={img2?.image} alt="" />
            ) : (
              <p className="font-semibold text-2xl flex items-center justify-center px-3">
                Coming Soon
              </p>
            )}
          </div>
          <div className="carousel-item border ml-2 border-slate-200 rounded-lg">
            {img3 ? (
              <img src={img3?.image} alt="" />
            ) : (
              <p className="font-semibold text-2xl flex items-center justify-center px-3">
                Coming Soon
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto my-16">
        {brandedProducts.length > 0 ? (
          brandedProducts.map((brandedProduct) => (
            <Product
              key={brandedProduct._id}
              brandedProduct={brandedProduct}
            ></Product>
          ))
        ) : (
          <p className="text-4xl text-center md:col-span-2 lg:col-span-3">
            Product Unavailable
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
