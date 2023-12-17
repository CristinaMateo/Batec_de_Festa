import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { Navigate } from "react-router-dom";
import { whoIsLogged } from "../Authentication/utils";

const Create = () => {
  const loggedUser = whoIsLogged()
  if (!loggedUser) {
    console.log("User not logged")
    return <Navigate to="/auth" />
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const Event = {
      title: data.title,
      image: data.image,
      city: data.city,
      location: data.location,
      description: data.description,
      event_time: data.event_time,
      event_date: data.event_date
    }

    try {
      axios.post(`http://localhost:3000/api/myevents/${email}`, Event)
    } catch (error) {
      console.error("Error creating event", error);
    }
    reset()
  }

  return (
    <form className="new" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Títol de l'esdeveniment:</label>
      <input type="text" {...register("title", { required: true, minLength: 3 })} />
      {errors.title && <span>El títol ha de tenir un mínim de tres caracters. Obligatori</span>}

      <label htmlFor="image">Afageix imatge:</label>
      <input type="text" {...register("image", { required: true })} />
      {errors.image && <span>Obligatori</span>}

      <label htmlFor="city">Ciutat:</label>
      <input type="text" {...register("city", { required: true })} />
      {errors.city && <span>Obligatori</span>}

      <label htmlFor="location">Adreça:</label>
      <input type="text" {...register("location", { required: true })} />
      {errors.location && <span>Obligatori</span>}

      <label htmlFor="description">Descripció:</label>
      <input type="text" {...register("description", { required: true })} />
      {errors.description && <span>Obligatori</span>}

      <label htmlFor="event_time">Hora:</label>
      <input type="time" {...register("event_time", { required: true })} />
      {errors.event_time && <span>Obligatori</span>}

      <label htmlFor="event_date">Data:</label>
      <input type="date" {...register("event_date", { required: true })} />
      {errors.event_date && <span>Obligatori</span>}


      <button >Crear</button>
    </form>
  );
};

export default Create;
