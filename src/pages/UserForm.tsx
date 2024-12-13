import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import apiClient from "../utils/api";

type FormValues = {
  name: string;
  lastname: string;
  phone_number: string;
  email: string;
  address: string;
};

const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await apiClient.post("/api/users/", data);

      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-3xl space-y-6 rounded-lg bg-white p-8 shadow-md"
    >
      <h2 className="text-center text-2xl font-bold text-grafito-suave">
        Usuario
      </h2>

      {[
        { id: "name", label: "Nombre", type: "text" },
        { id: "lastname", label: "Apellido", type: "text" },
        { id: "phone_number", label: "Número de Teléfono", type: "text" },
        { id: "email", label: "Correo Electrónico", type: "email" },
        { id: "address", label: "Dirección", type: "text" },
      ].map(({ id, label, type }) => (
        <div key={id} className="flex flex-col">
          <label htmlFor={id} className="mb-2 text-sm font-bold text-gray-600">
            {label}:
          </label>
          <input
            id={id}
            type={type}
            {...register(id as keyof FormValues, {
              required: `Este campo es obligatorio`,
            })}
            className="rounded-lg border border-gray-300 p-3 text-sm text-gray-700 focus:border-coral-neon focus:ring-coral-neon"
          />
          {errors[id as keyof FormValues] && (
            <p className="mt-1 text-sm text-red-500">
              {errors[id as keyof FormValues]?.message}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full rounded-2xl bg-grafito-suave py-2 text-lg font-bold text-white transition duration-300 hover:bg-turquesa-profundo"
      >
        Registrar Usuario
      </button>
    </form>
  );
};

export default UserForm;
