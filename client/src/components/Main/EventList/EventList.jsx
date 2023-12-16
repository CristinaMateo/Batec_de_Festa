import React from "react";
import { Link } from 'react-router-dom'
import EventCard from "./EventCard";

const EventList = ({ eventList }) => {


  return (
    <section className="eventList">
      {eventList == [] ? <p>No hay eventos</p> : eventList.map((events, index) => (
        <Link className="toDetails" key={index} to={`/event/${events.event_id}`}>
          <EventCard key={index} events={events} />
        </Link>
      ))}

    </section>
  );
};

export default EventList;
