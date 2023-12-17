import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

const Login = () => {

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
      const response = await axios.post(`http://localhost:3000/login`, User)
      sessionStorage.setItem('auth', JSON.stringify(response.data));
    } catch (error) {
      console.error("Error on log in", error);
    }

    reset()
    location.reload()
  }

  return (
    <section>
      <h2>Log in</h2>
      <form className="new" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Required</span>}

        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Required</span>}


        <button >Log in</button>

      </form>
    </section>
  );
};

export default Login;
