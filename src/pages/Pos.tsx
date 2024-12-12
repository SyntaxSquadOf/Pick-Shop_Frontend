import { useEffect, useState } from "react";
import { Product } from "../types";
import SideBar from "../components/SideBar";
import { productos } from "../data/products";
import { toast } from "react-toastify";

export const Pos = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get<Product[]>('/api/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // const hanglePos = () => {};

  useEffect(() => {
    setProducts(productos);
  }, []);

  return (
    <div className="flex">
      <div className="flex-1 p-6">
        <div className="flex justify-between">
          <h1 className="mb-6 text-2xl font-bold">Products</h1>
          <div>
            <button
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={() => {
                toast.success(`Product to POS`);
              }}
            />
            <button
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={() => {
                toast.success(`Product to POS`);
              }}
            />
            <button
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={() => {
                toast.success(`Product to POS`);
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-md bg-white shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">Price: ${product.price}</p>
                <button
                  className="mt-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                  onClick={() => {
                    toast.success(`Product ${product.name} to POS`);
                  }}
                >
                  Add to
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SideBar />
    </div>
  );
};
