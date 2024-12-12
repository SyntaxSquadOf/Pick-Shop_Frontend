import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, PlusIcon, EditIcon, TrashIcon } from 'lucide-react';
import { productos } from '../data/products';

const ProductTable = () => {
  return (
    <div className="m-16">
      <div className="flex justify-between mb-16">
        <Link to="/pos" className="text-grafito-suave hover:text-turquesa-profundo">
          <ArrowLeftIcon size={32} />
        </Link>
        <Link to="/add-product" className="bg-turquesa-profundo text-white px-5 py-2 rounded hover:bg-grafito-suave">
          <PlusIcon size={18} className="inline-block mr-2 mb-1" />
          Añadir Producto
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border bg-gray-200 text-left">ID</th>
            <th className="p-2 border bg-gray-200 text-left">Imagen</th>
            <th className="p-2 border bg-gray-200 text-left">Nombre</th>
            <th className="p-2 border bg-gray-200 text-left">Precio</th>
            <th className="p-2 border bg-gray-200 text-left">Stock</th>
            <th className="p-2 border bg-gray-200 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-b">
              <td className="p-2">{producto.id}</td>
              <td className="p-2">
                <img src={producto.image} alt={producto.name} className="w-20 h-20 object-contain" />
              </td>
              <td className="p-2">{producto.name}</td>
              <td className="p-2">${producto.price.toFixed(2)}</td>
              <td className="p-2">{producto.stock}</td>
              <td className="p-2 flex justify-start space-x-4 ml-2 mt-8">
                <Link to={`/edit-product/${producto.id}`} className="text-purpura-electrizante hover:text-blue-700">
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