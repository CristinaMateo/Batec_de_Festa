import React from "react";

const EventCard = ({events}) => {
  if (!events) {
    return null;
  }
  
  return (
    <article className="card" key={events.event_id}>
      <h3>{events.title}</h3>
      <p>Ciudad: {events.city}</p>
      <p>Fecha:{events.event_date}</p>
      <p>Hora:{events.event_time}</p>
    </article>
  );
};

export default EventCard;