import React from "react";

const EventCard = ({events}) => {
  if (!events) {
    return null;
  }
  
  return (
    <article className="card" key={events.event_id}>
      <h3>{events.title}</h3>
      <img className="eventImg" src={events.image} alt="imagen del evento" />
      <p>Ciutat: {events.city}</p>
      <p>Data: {events.event_date.slice(0, 10)}</p>
      
      
    </article>
  );
};

export default EventCard;