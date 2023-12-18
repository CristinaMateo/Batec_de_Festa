import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import EventList from '../EventList'
import Loader from '../Loader'

const Home = () => {

  const [allEvents, setAllEvents] = useState([]);
  const [filterdEvents, setfilteredEvents] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setselectedCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllEvents = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('/api/events');
      const eventData = response.data;
      setAllEvents(eventData);
      setfilteredEvents(eventData)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await axios.get('/api/cities')
      const cityData = await response.data.map(obj => obj.city);
      setCities(cityData)
    } catch (error) {
      console.error("Error fetching cities", error);
    }
  }

  useEffect(() => {
    fetchAllEvents();
    fetchCities();
  }, []);

  const filter = (event) => {
    setselectedCity(event.target.value)
  }

  useEffect(() => {
    if (selectedCity === "") {
      setfilteredEvents(allEvents)
    } else {
      const filterEvents = allEvents.filter((event) => event.city == selectedCity);
      setfilteredEvents(filterEvents)
    }
  }, [selectedCity])

  return (
    <>
      <section id="home">

        <form>
          <label htmlFor="cities">Filtrar per ciutat: </label>
          <select name="cities" id="cities" onChange={filter}>
            <option value="">Sense filtre</option>
            {cities.map((city, index) => (<option value={city} key={index}>{city}</option>))}
          </select>
        </form>

        <article className="event-container">
          {isLoading && <Loader />}
          {!isLoading && allEvents && <EventList eventList={filterdEvents} />}
        </article>
      </section>
    </>
  );
};

export default Home;
