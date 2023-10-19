import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const AddProduct = () => {
  const { brands } = useContext(AuthContext);
  const selectedDefaultValue = brands.find((brand, idx) => brand.id == idx + 1);

  const [selectedBrand, setSelectedBrand] = useState(
    selectedDefaultValue.brand_name
  );

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const brand = selectedBrand;
    const image = form.get("image");
    const type = form.get("type");
    const price = form.get("price");
    const ratting = form.get("rating");
    console.log(name, brand, image, type, price, ratting);
  };
  return (
    <div className="pt-20 pb-36 bg-[#93f18a1c]">
      <h1 className="text-5xl font-semibold text-center">Add Product</h1>
      <div className="w-9/12 mx-auto">
        <form onSubmit={handleAddProduct} className="mt-10">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-center mx-auto">
            {/* 1st Row */}
            <div className="space-y-5 w-full md:w-[50%]">
              <div className="form-control">
                <label className="input-group">
                  <span className="w-32 bg-slate-200 font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Product Name"
                    className="input w-full input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="w-32 bg-slate-200 text-sm font-medium">
                    Brand Name
                  </span>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="select select-bordered w-full join-item"
                  >
                    {brands.map((brand) => (
                      <option key={brand.id}>{brand.brand_name}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="w-32 bg-slate-200 font-medium">Image</span>
                  <input
                    type="text"
                    name="image"
                    required
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* 2nd Row */}
            <div className="space-y-5 w-full md:w-[50%]">
              <div className="form-control">
                <label className="input-group">
                  <span className="w-32 bg-slate-200 font-medium">Type</span>
                  <input
                    type="text"
                    name="type"
                    required
                    placeholder="Product Type"
                    className="input w-full input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="w-32 bg-slate-200 font-medium">Price</span>
                  <input
                    type="number"
                    name="price"
                    required
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="w-32 bg-slate-200 font-medium">Ratting</span>
                  <input
                    type="number"
                    name="rating"
                    required
                    placeholder="? out of 10"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-5">
            <input
              type="submit"
              value="Add Product"
              className=" px-2 py-3 bg-green-300 font-medium text-lg hover:bg-green-600 hover:text-white ease-in-out duration-300 cursor-pointer w-full mx-auto rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
