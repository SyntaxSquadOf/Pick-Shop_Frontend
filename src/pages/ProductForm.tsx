import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
  name: string;
  price: number;
  description: string;
  stock: number;
  imageURL: string;
  category: string;
};

const ProductForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const response = await axios.post('http://localhost:5000/api/productos', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-grafito-suave">Producto</h2>

      {[
        { id: "name", label: "Nombre del Producto", type: "text" },
        { id: "price", label: "Precio del Producto", type: "number" },
        { id: "description", label: "Descripción del Producto", type: "textarea" },
        { id: "stock", label: "Stock del Producto", type: "number" },
        { id: "imageURL", label: "URL de la Imagen", type: "text" },
        { id: "category", label: "Categoría del Producto", type: "text" },
      ].map(({ id, label, type }) => (
        <div key={id} className="flex flex-col">
          <label htmlFor={id} className="mb-2 text-sm font-bold text-gray-600">
            {label}:
          </label>
          {type === "textarea" ? (
            <textarea
              id={id}
              {...register(id as keyof FormValues, { required: `Este campo es obligatorio` })}
              className="rounded-lg border-gray-300 p-3 text-sm text-gray-700 focus:border-coral-neon focus:ring-coral-neon"
            />
          ) : (
            <input
              id={id}
              type={type}
              {...register(id as keyof FormValues, { required: `Este campo es obligatorio` })}
              className="rounded-lg border border-gray-300 p-3 text-sm text-gray-700 focus:border-coral-neon focus:ring-coral-neon"
            />
          )}
          {errors[id as keyof FormValues] && (
            <p className="mt-1 text-sm text-red-500">{errors[id as keyof FormValues]?.message}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full rounded-2xl bg-grafito-suave py-2 text-lg font-bold text-white hover:bg-turquesa-profundo transition duration-300"
      >
        Añadir al Inventario
      </button>
    </form>
  );
};

export default ProductForm;
