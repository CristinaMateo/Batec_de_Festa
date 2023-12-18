import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    const User = {
      email: data.email,
      password: data.password
    }
    try {
      const response = await axios.post(`/login`, User)
      sessionStorage.setItem('auth', JSON.stringify(response.data));
      sessionStorage.setItem('email', JSON.stringify(response.data.loggedEmail))
      sessionStorage.setItem('username', JSON.stringify(response.data.username))
    } catch (error) {
      console.error("Error on log in", error);
    }

    reset()
    navigate('/')
    location.reload()
    
  }

  return (
    <section>
      <h2>Iniciar sessió</h2>
      <form className="new" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Correu:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Obligatori</span>}

        <label htmlFor="password">Contrassenya:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Obligatori</span>}


        <button >Entra</button>

      </form>
    </section>
  );
};

export default Login;
