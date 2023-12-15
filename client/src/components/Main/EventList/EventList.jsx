import React from "react";
import { Link } from 'react-router-dom'
import EventCard from "./EventCard";

const EventList = ({ eventList }) => {


  return (
    <section className="eventList">
      {eventList == [] ? <p>No hay eventos</p> : eventList.map((events) => (
        <Link key={`${events.event_id}-link`} className="toDetails" to={`http://localhost:3000/api/events/${events.title}?city=${events.city}&time=${events.event_time}&date=${events.event_date}`}>
          <EventCard key={events.event_id} eventinfo={events} />
        </Link>
      ))}

    </section>
  );
};

export default EventList;
