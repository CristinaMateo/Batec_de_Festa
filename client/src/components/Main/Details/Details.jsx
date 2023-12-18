import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { whoIsLogged } from "../Authentication/utils";

const Details = () => {
  const loggedUser = whoIsLogged()
  const navigate = useNavigate()

  const { id } = useParams();
  const [eventDet, setEventDet] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const loggedemail = sessionStorage.getItem("email")?.replace(/^"(.*)"$/, '$1')

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
          description: datos.description,
          email: datos.email
        }


        setEventDet(detailedData);

      } catch (error) {
        console.log("Lo sentimos, no hemos podido acceder a los detalles")
      }
      setIsLoading(false)
    }

    fetchEventsDet();

  }, []);

  const deleteEvent = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3000/api/myevents/${id}/${loggedemail}`)
    navigate('/myevents')
  }

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
          <img className="eventDetImg" src={eventDet.img} alt="imagen del evento" />

          <br />
          <span>
            {loggedUser && loggedemail === eventDet.email &&
              <button onClick={deleteEvent}>Eliminar aquest esdeveniment</button>}
          </span>
          <br />
          <span>
            {loggedUser && loggedemail === eventDet.email &&
              <Link className={'update-link'} to='/update'>Punxa aquí per editar un esdeveniment</Link>
            }</span>

        </article>}

    </section>

  );
};

export default Details;
