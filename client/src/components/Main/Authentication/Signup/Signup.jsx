import React from "react";
import { useForm } from "react-hook-form";
import User from "../../../Object/User";

const Signup = () => {

  // const {createUser} = //guardar en bbdd

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    createUser(new User(
      data.email,
      data.username,
      data.password,
      data.pass2
    ))

    reset()
  }

  return (
    <section>
      <h2>Sign up</h2>
    <form className="new" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email">Email:</label>
      <input type="text" {...register("email", { required: true })} />
      {errors.email && <span>Required</span>}

      <label htmlFor="username">Username:</label>
      <input type="text" {...register("username", { required: true })} />
      {errors.username && <span>Required</span>}

      <label htmlFor="password">Password:</label>
      <input type="text" {...register("password", { required: true })} />
      {errors.password && <span>Required</span>}

      <label htmlFor="pass2">Confirm password:</label>
      <input type="text" {...register("pass2", { required: true })} />
      {errors.pass2 && <span>Required</span>}

      <button >Sign up</button>

    </form>
    </section>
  );
};

export default Signup;
