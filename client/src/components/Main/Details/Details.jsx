import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'
import Loader from "../Loader";

const Details = () => {

  const { id } = useParams();
  const [eventDet, setEventDet] = useState();
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {

    //Función detalles del envento!
    const fetchEventsDet = async () => {
      setIsLoading(true)
      try {
        const respuesta = await axios.get(`http://localhost:3000/api/events/${id}`);
        const datos = await respuesta.data

        const detailedData = {
          id: datos.event_id,
          title: datos.title,
          img: datos.image,
          city: datos.city,
          time: datos.event_time,
          date: datos.event_date,
          address: datos.address,
          description: datos.description
        }


        setEventDet(detailedData);

      } catch (error) {
       console.log("Lo sentimos, no hemos podido acceder a los detalles")
      }
      setIsLoading(false)
    }

    fetchEventsDet();

  }, []);

  return (
    <section>
      {isLoading && <Loader />}
      {!isLoading && eventDet &&
        <article id="eventDet">

          <h2>Detalls de l'esdeveniment</h2>

          <h3>{eventDet.title}</h3>
          <h4>{eventDet.city}</h4>
          <p>On? <br />{eventDet.address}</p>
          <p> Quan? <br />{eventDet.date.slice(0, 10)} , {eventDet.time}</p>
          <p>{eventDet.description}</p>
          <img className="eventDetImg" src={eventDet.img} alt="imagen del evento"/>

        </article>}

    </section>

  );
};

export default Details;
