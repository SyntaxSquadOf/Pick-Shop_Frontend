import { Link } from "react-router-dom";
import { ArrowLeftIcon, PlusIcon, EditIcon, TrashIcon } from "lucide-react";
import useFetchUsers from "../hooks/useFetchUsers";
import ShowModalUser from "./showModalUser";

const CustomerTable = () => {
  const { users, loading } = useFetchUsers();

  if (loading) {
    return <p>Loading recipes...</p>;
  }
  return (
    <div className="m-16">
      <div className="mb-16 flex justify-between">
        <Link
          to="/pos"
          className="text-grafito-suave hover:text-turquesa-profundo"
        >
          <ArrowLeftIcon size={32} />
        </Link>
        <ShowModalUser />
        {/* <Link
          to="/add-user"
          className="rounded bg-turquesa-profundo px-5 py-2 text-white hover:bg-grafito-suave"
        >
          <PlusIcon size={18} className="mb-1 mr-2 inline-block" />
          Añadir Cliente
        </Link> */}
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border bg-gray-200 p-2 text-left">ID</th>
            <th className="border bg-gray-200 p-2 text-left">Nombre</th>
            <th className="border bg-gray-200 p-2 text-left">Apellido</th>
            <th className="border bg-gray-200 p-2 text-left">Teléfono</th>
            <th className="border bg-gray-200 p-2 text-left">Correo</th>
            <th className="border bg-gray-200 p-2 text-left">Dirección</th>
            <th className="border bg-gray-200 p-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((customer) => (
            <tr key={customer._id} className="border-b">
              <td className="p-2">{customer._id}</td>
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.lastname}</td>
              <td className="p-2">{customer.phone_number}</td>
              <td className="p-2">{customer.email}</td>
              <td className="p-2">{customer.address}</td>
              <td className="ml-2 mt-8 flex justify-start space-x-4 p-2">
                <Link
                  to={`/edit-customer/${customer._id}`}
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

export default CustomerTable;
