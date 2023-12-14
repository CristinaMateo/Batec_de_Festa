import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home';
import Authentication from './Authentication';
import Details from './Details';
import Create from './Create';
import MyEvents from './MyEvents';
import Update from './Update';




const Main = () => {
  

  return (
    <main>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={< Authentication/>} />
        <Route path="/event/:id" element={<Details />} />
        <Route path="/create/:email" element={<Create />} />
        <Route path="/event/:id/:email" element={<MyEvents />} />
        <Route path="/update/:id/:email" element={<Update />} />
        <Route path="/*" element={<Navigate to={"/"} />} /> 
      </Routes>
    </main>
  );
};

export default Main;