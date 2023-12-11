import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [newPokeList, setnewPokeList] = useState([]);

  const addPokemon = (newPokemon) =>{
    setnewPokeList([...newPokeList,newPokemon])
  }

  const pokeData ={newPokeList, addPokemon };

  return (
    <>
      <BrowserRouter>
        <Header />
          <Main />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
