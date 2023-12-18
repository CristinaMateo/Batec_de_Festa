import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import EventList from '../EventList'
import { whoIsLogged } from "../Authentication/utils";
import Loader from '../Loader'

const MyEvents = () => {

  const loggedUser = whoIsLogged()
  if (!loggedUser) {
    console.log("User not logged")
    return <Navigate to="/auth" />
  }

  const [myEvents, setMyEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const email = sessionStorage.getItem("email")

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`http://localhost:3000/api/myevents/${email}`);
        console.log(response);
        const eventData = await response.data;
        setMyEvents(eventData);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchMyEvents();
  }, []);

  return (
    <>
      <section id="myevents">
        {isLoading && <Loader />}
        <article className="event-container">
          {!isLoading && myEvents &&
            <>
              <Link className={'update-link'} to='/update'>Punxa aquí per editar un esdeveniment</Link>
              <EventList eventList={myEvents} />
            </>}
        </article>
      </section>
    </>
  );
};

export default MyEvents;