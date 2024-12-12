import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, PlusIcon, EditIcon, TrashIcon } from 'lucide-react';
import { user } from '../data/user';

const CustomerTable = () => {
  return (
    <div className="m-16">
      <div className="flex justify-between mb-16">
        <Link to="/pos" className="text-grafito-suave hover:text-turquesa-profundo">
          <ArrowLeftIcon size={32} />
        </Link>
        <Link to="/add-customer" className="bg-turquesa-profundo text-white px-5 py-2 rounded hover:bg-grafito-suave">
          <PlusIcon size={18} className="inline-block mr-2 mb-1" />
          Añadir Cliente
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border bg-gray-200 text-left">ID</th>
            <th className="p-2 border bg-gray-200 text-left">Nombre</th>
            <th className="p-2 border bg-gray-200 text-left">Apellido</th>
            <th className="p-2 border bg-gray-200 text-left">Teléfono</th>
            <th className="p-2 border bg-gray-200 text-left">Correo</th>
            <th className="p-2 border bg-gray-200 text-left">Dirección</th>
            <th className="p-2 border bg-gray-200 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {user.map((customer) => (
            <tr key={customer.id} className="border-b">
              <td className="p-2">{customer.id}</td>
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.lastname}</td>
              <td className="p-2">{customer.phone_number}</td>
              <td className="p-2">{customer.email}</td>
              <td className="p-2">{customer.address}</td>
              <td className="p-2 flex justify-start space-x-4 ml-2 mt-8">
                <Link to={`/edit-customer/${customer.id}`} className="text-purpura-electrizante hover:text-blue-700">
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

export default CustomerTable;