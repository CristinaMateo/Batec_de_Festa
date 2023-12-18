import React  from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { whoIsLogged } from "../Authentication/utils";


const Update = () => {

  const loggedUser = whoIsLogged()
  if (!loggedUser) {
    console.log("User not logged")
    return <Navigate to="/auth" />
  }
  const email = sessionStorage.getItem("email")
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    const Event ={
      title: data.title,
      image: data.image,
      city: data.city,
      address: data.location,
      description: data.description,
      event_time: data.event_time,
      event_date: data.event_date,
      oldTitle: data.oldtitle,
      email: email.replace(/^"(.*)"$/, '$1')
    }
    try{
      await axios.put(`/api/myevents`, Event)
      
    }catch (error) {
      console.error("Error updating event", error);
    }
    reset();
  } 
 
  return (
    <>
    <h2>Edita un esdeveniment</h2>
    <p>Recorda que has d'omplir tots els camps tot i que no en canviïs la informació.</p>
    <form className="new" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="oldtitle">Títol actual de l'esdeveniment:</label>
      <input type="text" {...register("oldtitle", { required: true, minLength: 3 })} />
      {errors.oldtitle && <span>El títol ha de tenir un mínim de tres caracters. Obligatori</span>}

      <label htmlFor="title">Vols canviar el títol? (opcional)</label>
      <input type="text" {...register("title", { required: true, minLength: 3 })} />
      {errors.title && <span>El títol ha de tenir un mínim de tres caracters. Si no el vols canviar, introdueix el mateix títol.</span>}

      <label htmlFor="image">Afageix imatge:</label>
      <input type="text" {...register("image", { required: true })} />
      {errors.image && <span>Obligatori</span>}

      <label htmlFor="city">Ciutat:</label>
      <input type="text" {...register("city", { required: true})} />
      {errors.city && <span> Obligatori</span>}

      <label htmlFor="location">Adreça:</label>
      <input type="text" {...register("location", { required: true})} />
      {errors.location && <span>Obligatori</span>}

      <label htmlFor="description">Descripció:</label>
      <input type="text" {...register("description", { required: true})} />
      {errors.description && <span>Obligatori</span>}

      <label htmlFor="event_time">Hora:</label>
      <input type="time" {...register("event_time", { required: true})} />
      {errors.time && <span>Obligatori</span>}

      <label htmlFor="event_date">Data:</label>
      <input type="date" {...register("event_date", { required: true})} />
      {errors.date && <span>Obligatori</span>}

      
      <button >Edita</button>
    </form>
    </>
  );
};

export default Update;