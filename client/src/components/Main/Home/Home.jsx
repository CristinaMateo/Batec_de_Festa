import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import EventList from '../EventList'
import Loader from '../Loader'

const Home = () => {

  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('http://localhost:3000/api/events');
        const eventData = response.data;
        setAllEvents(eventData);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchAllEvents();
  }, []);




  return (
    <>
      <section id="home">

        <article className="event-container">
          {isLoading && <Loader/>}
          {!isLoading && allEvents && <EventList eventList={allEvents} />}
        </article>
      </section>
    </>
  );
};

export default Home;
