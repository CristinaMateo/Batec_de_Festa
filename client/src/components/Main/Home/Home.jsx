import React from "react";
import { useEffect, useState } from "react";
import EventList from '../EventList'

const Home = () => {

  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
         const reponse = await axios.get('/api/events');
        const eventData = response.data.results;
 
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
