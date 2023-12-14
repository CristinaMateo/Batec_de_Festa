import React from "react";

const EventCard = ({eventinfo}) => {
  if (!eventinfo) {
    return null;
  }
console.log(eventinfo)
  
  return (
    <article className="card" key={eventinfo.event_id}>
      <h3>{eventinfo.title}</h3>
      <p>Ciudad: {eventinfo.city}</p>
      <p>Fecha:{eventinfo.event_date}</p>
      <p>Hora:{eventinfo.event_time}</p>
    </article>
  );
};

export default EventCard;