import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";



const Main = () => {
  

  return (
    <main>
       <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Buscador />} />
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path="/new" element={<New />} />
        <Route path="/*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </main>
  );
};

export default Main;