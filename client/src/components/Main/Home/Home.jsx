import React from "react";
import { useEffect, useState } from "react";
import EventList from '../EventList'

const Home = () => {

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
      <section id="home">
        
        <article className="event-container">
          <EventList  />
        </article>
      </section>
    </>
  );
};

export default Home;
