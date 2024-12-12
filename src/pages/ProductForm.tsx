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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre del Producto:</label>
        <input id="name" {...register("name", { required: "Este campo es obligatorio" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="price">Precio del Producto:</label>
        <input type="number" id="price" {...register("price", { required: "Este campo es obligatorio" })} />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <label htmlFor="description">Descripción del Producto:</label>
        <textarea id="description" {...register("description", { required: "Este campo es obligatorio" })} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="stock">Stock del Producto:</label>
        <input type="number" id="stock" {...register("stock", { required: "Este campo es obligatorio" })} />
        {errors.stock && <p>{errors.stock.message}</p>}
      </div>

      <div>
        <label htmlFor="imageURL">URL de la Imagen:</label>
        <input id="imageURL" {...register("imageURL", { required: "Este campo es obligatorio" })} />
        {errors.imageURL && <p>{errors.imageURL.message}</p>}
      </div>

      <div>
        <label htmlFor="category">Categoría del Producto:</label>
        <input id="category" {...register("category", { required: "Este campo es obligatorio" })} />
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <button type="submit">Registrar Producto</button>
    </form>
  );
}

export default ProductForm;
