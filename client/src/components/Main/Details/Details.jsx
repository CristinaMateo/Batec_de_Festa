import React from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
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
        const response = await fetch(`http://localhost:3000/api/events/${id}`);
        const data = await response.json();

        setEventDet({
          id: data.id,
          title: data.title,
          city: data.city,
          time: data.event_time,
          date: data.event_date,
          ...data
        })
      } catch (error) {
        setEventDet({
          id: id,
          title: searchParams.get('title'),
          city: searchParams.get('city'),
          time: searchParams.get('event_time'),
          date: searchParams.get('event_date'),
        })
      }

    }
    fetchEventsDet();
  },[]);

  return (
    <section>
      {isLoading && !eventDet && <Loader />}

      <article id="eventDet">
        Mostrar aquí detalles del evento:
        Título:
        Ciudad:
        Imagen:
        Dirección:
        Fecha:
        Hora:
        Descripción
      </article>

    </section>

  );
};

export default Details;
