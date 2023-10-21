import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { productId } = useParams();
  const { products, brands } = useContext(AuthContext);
  const navigate = useNavigate();

  const selectedProduct = products.find((product) => product._id == productId);
  const [selectedBrand, setSelectedBrand] = useState(selectedProduct.brand);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const brand = selectedBrand;
    const image = form.get("image");
    const type = form.get("type");
    const price = form.get("price");
    const ratting = form.get("rating");
    const description = form.get("description");
    const updatedProduct = {
      name,
      brand,
      image,
      type,
      price,
      ratting,
      description,
    };

    fetch(
      `https://b8a10-brandshop-server-side-frs11.vercel.app/products/update/${selectedProduct._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          navigate(-1);
        }
      });

    e.target.reset();
  };

  return (
    <div className="pt-20 pb-36 bg-[#6fb9681c]">
      <h1 className="text-5xl mb-24 font-semibold text-center">
        Update: <span className="text-green-500">{selectedProduct.name}</span>
      </h1>
      <div className="w-9/12 mx-auto">
        <form onSubmit={handleUpdateProduct} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mx-auto">
            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedProduct.name}
                  required
                  placeholder="Product Name"
                  className="input w-full input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  text-sm font-medium">
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
              <label className="">
                <span className="ml-1 mb-1  font-medium">Image</span>
                <input
                  type="text"
                  name="image"
                  defaultValue={selectedProduct.image}
                  required
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Type</span>
                <input
                  type="text"
                  name="type"
                  defaultValue={selectedProduct.type}
                  required
                  placeholder="Product Type"
                  className="input w-full input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Price</span>
                <input
                  type="number"
                  defaultValue={selectedProduct.price}
                  name="price"
                  required
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Ratting</span>
                <input
                  type="number"
                  name="rating"
                  defaultValue={selectedProduct.ratting}
                  required
                  placeholder="? out of 10"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:col-span-2">
              <label className="">
                <span className=" font-medium">Description</span>
                <input
                  type="text"
                  name="description"
                  defaultValue={selectedProduct.description}
                  required
                  placeholder="Short Description"
                  className="input input-bordered h-20 w-full"
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-5">
            <input
              type="submit"
              value="Update Product"
              className=" px-2 py-3 bg-green-300 font-medium text-lg hover:bg-green-600 hover:text-white ease-in-out duration-300 cursor-pointer w-full mx-auto rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
