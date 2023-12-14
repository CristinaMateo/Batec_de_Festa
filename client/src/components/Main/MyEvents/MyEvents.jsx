import React from "react";
import { useEffect, useState } from "react";
import EventList from '../EventList'

const MyEvents = () => {

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