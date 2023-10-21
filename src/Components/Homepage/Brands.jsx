import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Brand from "./Brand";

const Brands = () => {
  const { brands } = useContext(AuthContext);
  return (
    <div className="py-10 bg-stone-50 dark:bg-slate-700 dark:text-slate-200">
      <div className="">
        <h1 className="text-3xl lg:text-4xl text-center font-medium">
          Our <span className="text-green-500">Brand</span> Partners
        </h1>
      </div>
      <div className="w-10/12 lg:max-w-screen-2xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
