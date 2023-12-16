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

   
  }

  return (
    <section id="sign">
      <h2>Sign up</h2>
      <form className="new" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Required</span>}

        <label htmlFor="username">Username:</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && <span>Required</span>}

        <label htmlFor="image">Image:</label>
        <input type="text" {...register("image", { required: true })} />
        {errors.image && <span>Required</span>}

        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Required</span>}

        <label htmlFor="pass2">Confirm password:</label>
        <input type="password" {...register("pass2", { required: true })} />
        {errors.pass2 && <span>Required</span>}

        <button >Sign up</button>

      </form>
    </section>
  );
};

export default Signup;
