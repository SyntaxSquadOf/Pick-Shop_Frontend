import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
  name: string;
  lastname: string;
  phone_number: string;
  email: string;
  address: string;
};

const UserForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', data, {
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
        <label htmlFor="name">Nombre:</label>
        <input id="name" {...register("name", { required: "Este campo es obligatorio" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="lastname">Apellido:</label>
        <input id="lastname" {...register("lastname", { required: "Este campo es obligatorio" })} />
        {errors.lastname && <p>{errors.lastname.message}</p>}
      </div>

      <div>
        <label htmlFor="phone_number">Número de Teléfono:</label>
        <input id="phone_number" {...register("phone_number", { required: "Este campo es obligatorio" })} />
        {errors.phone_number && <p>{errors.phone_number.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input id="email" type="email" {...register("email", { required: "Este campo es obligatorio" })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="address">Dirección:</label>
        <input id="address" {...register("address", { required: "Este campo es obligatorio" })} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <button type="submit">Registrar Usuario</button>
    </form>
  );
}

export default UserForm;
