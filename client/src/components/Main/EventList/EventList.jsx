import React from "react";
import { Link } from 'react-router-dom'
import EventCard from "./EventCard";

const EventList = ({ eventList }) => {


  return (
    <section className="eventList">
      {eventList == [] ? <p>No hay eventos</p> : eventList.map((events, index) => (
        <Link className="toDetails" to={`/event/${events.event_id}?city=${events.city}&time=${events.event_time}&date=${events.event_date}&title=${events.title}&address=${events.address}&description=${events.description}`}>
          <EventCard key={index} events={events} />
        </Link>
      ))}

    </section>
  );
};

export default EventList;
