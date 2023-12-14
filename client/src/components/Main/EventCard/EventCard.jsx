import React from "react";

const EventCard = (eventinfo) => {
  if (!eventinfo) {
    return null;
  }
  
  return (
    <article className="card" key={eventinfo.id}>
      Sustituir por datos del evento 

      Título:
      Ciudad:
      Fecha:
      Hora:
      Imagen:
      {/* <div className="pokeId"><span>#{pokemon.id}</span></div>
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img className="pokeImg" src={pokemon.image} alt={pokemon.name} /> */}
    </article>
  );
};

export default EventCard;