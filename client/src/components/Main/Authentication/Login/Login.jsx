import React from "react";

const Login = () => {
  return (
    <section>
      <h2>Log in</h2>
    <form className="new" >

      <label htmlFor="email">Email:</label>
      <input type="text" />

      <label htmlFor="password">Password:</label>
      <input type="text"/>
      

      <button >Log in</button>

    </form>
    </section>
  );
};

export default Login;
