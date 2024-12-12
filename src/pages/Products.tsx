import { Link } from "react-router-dom";
import { productos } from "../data/products";

export default function Products() {
  return (
    <div className="">
      <div className="m-10 flex justify-between">
        <button className="bg-gray-500">
          <Link to={"/pos"}> Volver hacia POS</Link>
        </button>
        <button className="bg-gray-600">
          <Link to={"/add-product"}> Añadir Producto</Link>
        </button>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productos.map((product) => (
            <a key={product.id} className="group">
              <img
                src={product.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
