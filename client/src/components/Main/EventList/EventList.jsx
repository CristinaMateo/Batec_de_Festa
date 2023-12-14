import React from "react";
import { Link } from 'react-router-dom'
import EventCard from "../EventCard";

const EventList = (/*lsita de evnetos del fetch de Home*/ ) => {



  return (
    <section className="eventList">

       Sustituir por datos de eventos!!!!
       <EventCard />
      {/* {allPokemon == [] ? <p>No hay pokemon</p> :
        allPokemon.map((pokemon, index) => (
          <Link className="toDetails" to={`event/id?`}><EventCard key={index} pokemon={pokemon} /></Link>
        ))

      }  */}
    </section>
  );
};

export default EventList;
