import { useEffect, useState } from "react";
import { Product } from "../types";
import SideBar from "../components/SideBar";
import { productos } from "../data/products";
import { toast } from "react-toastify";
import CardProduct from "../components/CardProduct";

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

  const onAddToCart = () => {};

  useEffect(() => {
    setProducts(productos);
  }, []);

  return (
    <div className="flex max-md:flex-col">
      <div className="flex-1 p-6">
        <div className="flex justify-between">
          <h1 className="mb-6 text-2xl font-bold">Products</h1>
          <div>
            <button
              className="mx-4 rounded-3xl bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={() => {
                toast.success(`Product to POS`);
              }}
            >
              Texto de Ejemplo
            </button>
            <button
              className="mx-4 rounded-3xl bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={() => {
                toast.success(`Product to POS`);
              }}
            >
              Texto de Ejemplo
            </button>
            <button
              className="mx-4 rounded-3xl bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={() => {
                toast.success(`Product to POS`);
              }}
            >
              Texto de Ejemplo
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <CardProduct
              key={product._id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
      <SideBar />
    </div>
  );
};
