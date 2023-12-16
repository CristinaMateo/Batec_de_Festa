import React from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'
import Loader from "../Loader";

const Details = () => {

  const { id } = useParams();
  const [eventDet, setEventDet] = useState();
  const [searchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {

    setIsLoading(true)
    //Función detalles del envento!
    const fetchEventsDet = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:3000/api/events/${id}`);
        const datos = await respuesta.json()
        console.log(respuesta);

        const detailedData = {
          id: datos.event_id,
          title: datos.title,
          city: datos.city,
          time: datos.event_time,
          date: datos.event_date,
          address: datos.address,
          description: datos.description
        }


        setEventDet(detailedData);
        console.log(eventDet);

      } catch (error) {
        setEventDet({
          id: id,
          title: searchParams.get('title'),
          city: searchParams.get('city'),
          time: searchParams.get('event_time'),
          date: searchParams.get('event_date'),
          address: searchParams.get('address'),
          description: searchParams.get('description')
        })
      }
    }

    fetchEventsDet();

  }, []);

  return (
    <section>
      {isLoading && !eventDet && <Loader />}

      <article id="eventDet">

        <h3>{eventDet.title}</h3>
        Poner una imagen por defecto
        <h4>{eventDet.city}</h4>
        <p>Location: {eventDet.address}</p>
        <p>{eventDet.date}</p>
        <p>{eventDet.time}</p>
        <p>{eventDet.description}</p>

      </article>

    </section>

  );
};

export default Details;
