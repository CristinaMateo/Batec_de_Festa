import React from "react";

const Logout = () => {

  const logout = () => {
    sessionStorage.removeItem('auth')
    sessionStorage.removeItem('email')
    location.reload()
  }

  return (
    <div className="logout">
      <button onClick={logout}>Sortir</button>
    </div>
  )
};

export default Logout;
