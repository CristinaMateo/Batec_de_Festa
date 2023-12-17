import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const User = {
      email: data.email,
      username: data.username,
      image: data.image,
      password: data.password,
      pass2: data.pass2
    }

    try {
      axios.post(`http://localhost:3000/addUser`, User)
    } catch (error) {
      console.error("Error signin up", error);
    }

    reset()
  }

  return (
    <section id="sign">
      <h2>Registra't</h2>
      <form className="new" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Correu:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Obligatori</span>}

        <label htmlFor="username">Nom d'usuari:</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && <span>Obligatori</span>}

        <label htmlFor="image">Imatge:</label>
        <input type="text" {...register("image", { required: true })} />
        {errors.image && <span>Obligatori</span>}

        <label htmlFor="password">Contrassenya:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Obligatori</span>}

        <label htmlFor="pass2">Confirma la contrassenya:</label>
        <input type="password" {...register("pass2", { required: true })} />
        {errors.pass2 && <span>Obligatori</span>}

        <button >Fet</button>

      </form>
    </section>
  );
};

export default Signup;
