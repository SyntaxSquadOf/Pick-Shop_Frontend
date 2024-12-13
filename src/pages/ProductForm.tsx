import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useFetchCategoryProduct from "../hooks/useFetchCategoryProduct";
import apiClient from "../utils/api";

type FormValues = {
  name: string;
  price: number;
  description: string;
  stock: number;
  imageURL: string;
  category: string;
};

const ProductForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { categoryProducts, loading } = useFetchCategoryProduct();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await apiClient.post("/api/productos/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

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
        Producto
      </h2>

      {[
        { id: "name", label: "Nombre del Producto", type: "text" },
        { id: "price", label: "Precio del Producto", type: "number" },
        {
          id: "description",
          label: "Descripción del Producto",
          type: "textarea",
        },
        { id: "stock", label: "Stock del Producto", type: "number" },
        { id: "imageURL", label: "URL de la Imagen", type: "text" },
      ].map(({ id, label, type }) => (
        <div key={id} className="flex flex-col">
          <label htmlFor={id} className="mb-2 text-sm font-bold text-gray-600">
            {label}:
          </label>
          {type === "textarea" ? (
            <textarea
              id={id}
              {...register(id as keyof FormValues, {
                required: `Este campo es obligatorio`,
              })}
              className="rounded-lg border-gray-300 p-3 text-sm text-gray-700 focus:border-coral-neon focus:ring-coral-neon"
            />
          ) : (
            <input
              id={id}
              type={type}
              {...register(id as keyof FormValues, {
                required: `Este campo es obligatorio`,
              })}
              className="rounded-lg border border-gray-300 p-3 text-sm text-gray-700 focus:border-coral-neon focus:ring-coral-neon"
            />
          )}
          {errors[id as keyof FormValues] && (
            <p className="mt-1 text-sm text-red-500">
              {errors[id as keyof FormValues]?.message}
            </p>
          )}
        </div>
      ))}
      <div className="flex flex-col">
        <label
          htmlFor="category"
          className="mb-2 text-sm font-bold text-gray-600"
        >
          Categoría del Producto:
        </label>
        <select
          id="category"
          {...register("category", { required: "Este campo es obligatorio" })}
          className="rounded-lg border border-gray-300 p-2 text-sm text-gray-700 focus:border-coral-neon focus:ring-coral-neon"
        >
          <option value="">Seleccionar Categoría</option>
          {categoryProducts.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-2xl bg-grafito-suave py-2 text-lg font-bold text-white transition duration-300 hover:bg-turquesa-profundo"
      >
        Añadir al Inventario
      </button>
    </form>
  );
};

export default ProductForm;
