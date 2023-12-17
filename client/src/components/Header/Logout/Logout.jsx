import React from "react";

const Logout = () => {

const logout = () =>{
  sessionStorage.removeItem('auth')
  location.reload()
}

  return (
    <div className="logout">
    <button onClick={logout}>Log out</button>
    </div>
  )
};

export default Logout;
