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
      <label htmlFor="title">Event title:</label>
      <input type="text" {...register("title", { required: true, minLength: 3 })} />
      {errors.title && <span>Title needs to have at least 3 characters. Required</span>}

      <label htmlFor="image">Add an image:</label>
      <input type="text" {...register("image", { required: true })} />
      {errors.image && <span>Required</span>}

      <label htmlFor="city">City:</label>
      <input type="text" {...register("city", { required: true })} />
      {errors.city && <span>Required</span>}

      <label htmlFor="location">Address:</label>
      <input type="text" {...register("location", { required: true })} />
      {errors.location && <span>Required</span>}

      <label htmlFor="description">Description:</label>
      <input type="text" {...register("description", { required: true })} />
      {errors.description && <span>Required</span>}

      <label htmlFor="event_time">Time:</label>
      <input type="time" {...register("event_time", { required: true })} />
      {errors.event_time && <span>Required</span>}

      <label htmlFor="event_date">Date:</label>
      <input type="date" {...register("event_date", { required: true })} />
      {errors.event_date && <span>Required</span>}


      <button >Create</button>
    </form>
  );
};

export default Create;
