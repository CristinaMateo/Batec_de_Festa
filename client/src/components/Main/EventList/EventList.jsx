import React from "react";
import EventCard from "./EventCard";

const EventList = ({ eventList }) => {
  return (
    <section className="eventList">

      {eventList == [] ? <p>No hi ha esdeveniments per mostrar</p> : eventList.map((events, index) => (
        <EventCard key={index} events={events} />

      ))}

    </section>
  );
};

export default EventList;
