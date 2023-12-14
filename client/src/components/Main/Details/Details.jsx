import React from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loader from "../Loader";

const Details = () => {

  const { id } = useParams();
  const [eventDet, setEventDet] = useState();
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    //Función detalles del envento!

    /* const fetchPokeDet = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemonDet({
          id: data.id,
          name: data.name,
          image: data.sprites.other.home.front_default,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1]?.type.name,
          ...data
        })
      } catch (error) {
        setPokemonDet({
          id: id,
          name: searchParams.get('name'),
          image: searchParams.get('image'),
          typeOne: searchParams.get('typeOne'),
          typeTwo: searchParams.get('typeTwo')
        })

      }

    }
    fetchPokeDet(); */
  }, []);


  return (

    <section>
      {isLoading && !eventDet && <Loader/>}

      <article>
        Mostrar aquí detalles del evento:
        Título:
        Ciudad:
        Imagen:
        Dirección:
        Fecha:
        Hora:
        Descripción
      </article>

    </section>

  );
};

export default Details;
