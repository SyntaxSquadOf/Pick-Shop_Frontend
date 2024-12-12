import { Link } from "react-router-dom";
import { ArrowLeftIcon, PlusIcon, EditIcon, TrashIcon } from "lucide-react";
import { productos } from "../data/products";

const ProductTable = () => {
  return (
    <div className="m-16">
      <div className="mb-16 flex justify-between">
        <Link
          to="/pos"
          className="text-grafito-suave hover:text-turquesa-profundo"
        >
          <ArrowLeftIcon size={32} />
        </Link>
        <Link
          to="/add-product"
          className="rounded bg-turquesa-profundo px-5 py-2 text-white hover:bg-grafito-suave"
        >
          <PlusIcon size={18} className="mb-1 mr-2 inline-block" />
          Añadir Producto
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border bg-gray-200 p-2 text-left">ID</th>
            <th className="border bg-gray-200 p-2 text-left">Imagen</th>
            <th className="border bg-gray-200 p-2 text-left">Nombre</th>
            <th className="border bg-gray-200 p-2 text-left">Precio</th>
            <th className="border bg-gray-200 p-2 text-left">Stock</th>
            <th className="border bg-gray-200 p-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id} className="border-b">
              <td className="p-2">{producto._id}</td>
              <td className="p-2">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="h-20 w-20 object-contain"
                />
              </td>
              <td className="p-2">{producto.name}</td>
              <td className="p-2">${producto.price.toFixed(2)}</td>
              <td className="p-2">{producto.stock}</td>
              <td className="ml-2 mt-8 flex justify-start space-x-4 p-2">
                <Link
                  to={`/edit-product/${producto._id}`}
                  className="text-purpura-electrizante hover:text-blue-700"
                >
                  <EditIcon size={22} />
                </Link>
                <button className="text-coral-neon hover:text-red-700">
                  <TrashIcon size={22} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
