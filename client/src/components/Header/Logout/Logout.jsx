import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.removeItem('auth')
    sessionStorage.removeItem('email')
    navigate('/')
    location.reload()
  }

  return (
    <div className="logout">
      <button onClick={logout}>Sortir</button>
    </div>
  )
};

export default Logout;
