import React from "react";
import { useEffect, useState } from "react";
import EventList from '../EventList'
import { Navigate } from "react-router-dom";
import { whoIsLogged } from "../Authentication/utils";

const MyEvents = () => {

  const loggedUser = whoIsLogged()
  if (!loggedUser) {
    console.log("User not logged")
    return <Navigate to="/auth" />
  }
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        

      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchAllEvents();
  }, []);




  return (
    <>
      <section id="myevents">
        Mostrar eventos del usuario, coger por mail
        <article className="event-container">
          <EventList  />
        </article>
      </section>
    </>
  );
};

export default MyEvents;