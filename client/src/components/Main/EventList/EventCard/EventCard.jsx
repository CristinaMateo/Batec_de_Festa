import React from "react";
import { useNavigate } from "react-router-dom";



const EventCard = ({events}) => {
  if (!events) {
    return null;
  }
  const navigate = useNavigate()
 
  const renderDetail=()=>{
    navigate(`/event/${events.event_id}`)
  }

  return (
    <article className="card" key={events.event_id} onClick={renderDetail}>
      <h3>{events.title}</h3>
      <img className="eventImg" src={events.image} alt="imagen del evento" />
      <p>Ciutat: {events.city}</p>
      <p>Data: {events.event_date.slice(0, 10)}</p>
      
    </article>
  );
};

export default EventCard;