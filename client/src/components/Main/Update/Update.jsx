import React  from "react";
import { useForm } from "react-hook-form";
import Event from "../../Object/Event";

const Update = () => {

  // const {createEvent} = //guardar en bbdd

  //No crear evento nuevo, tiene que llamar al update event

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    createEvent(new Event(
      data.title,
      data.image,
      data.city,
      data.location,
      data.description,
      data.event_time,
      data.event_date
    ))
 
    reset()
  }

  return (
    <form className="update" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Event title:</label>
      <input type="text" {...register("title", { required: true, minLength: 3 })} />
      {errors.title && <span>Title needs to have at least 3 characters. Required</span>}

      <label htmlFor="title">Want to change your event title? (optional)</label>
      <input type="text" {...register("title", { required: false, minLength: 3 })} />
      {errors.title && <span>Title needs to have at least 3 characters.¡</span>}

      <label htmlFor="image">Add an image:</label>
      <input type="text" {...register("image", { required: true })} />
      {errors.image && <span>Required</span>}

      <label htmlFor="city">City:</label>
      <input type="text" {...register("city", { required: true})} />
      {errors.city && <span>Required</span>}

      <label htmlFor="location">Address:</label>
      <input type="text" {...register("location", { required: true})} />
      {errors.location && <span>Required</span>}

      <label htmlFor="description">Description:</label>
      <input type="text" {...register("description", { required: true})} />
      {errors.description && <span>Required</span>}

      <label htmlFor="event_time">Time:</label>
      <input type="time" {...register("event_time", { required: true})} />
      {errors.event_time && <span>Required</span>}

      <label htmlFor="event_date">Date:</label>
      <input type="date" {...register("event_date", { required: true})} />
      {errors.event_date && <span>Required</span>}

      
      <button >Update</button>
    </form>
  );
};

export default Update;