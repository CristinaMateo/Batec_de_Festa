import React  from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'


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
    const Event ={
      title:data.title,
      image:data.image,
      city:data.city,
      location:data.location,
      description:data.description,
      event_time:data.event_time,
      event_date:data.event_date
    }
    try{
      axios.put(`http://localhost:3000/api/myevents/${oldtitle}/${email}`, Event)
    }catch (error) {
      console.error("Error updating event", error);
    }
  } 
 
    reset()
  

  return (
    <>
    <h2>Edita l'esdeveniment</h2>
    <form className="new" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="oldtitle">Títol actual de l'esdeveniment:</label>
      <input type="text" {...register("oldtitle", { required: true, minLength: 3 })} />
      {errors.oldtitle && <span>El títol ha de tenir un mínim de tres caracters. Obligatori</span>}

      <label htmlFor="title">Vols canviar el títol? (opcional)</label>
      <input type="text" {...register("title", { required: false, minLength: 3 })} />
      {errors.title && <span>El títol ha de tenir un mínim de tres caracters.</span>}

      <label htmlFor="image">Afageix imatge: (opcional)</label>
      <input type="text" {...register("image", { required: false })} />

      <label htmlFor="city">Ciutat: (opcional)</label>
      <input type="text" {...register("city", { required: false})} />

      <label htmlFor="location">Adreça: (opcional)</label>
      <input type="text" {...register("location", { required: false})} />

      <label htmlFor="description">Descripció: (opcional)</label>
      <input type="text" {...register("description", { required: false})} />

      <label htmlFor="event_time">Hora: (opcional)</label>
      <input type="time" {...register("event_time", { required: false})} />

      <label htmlFor="event_date">Data: (opcional)</label>
      <input type="date" {...register("event_date", { required: false})} />

      
      <button >Edita</button>
    </form>
    </>
  );
};

export default Update;