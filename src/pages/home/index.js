import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const isLogged = useSelector((state) => state.user.isLogged);

  return <div>{isLogged ? <p>Estas logeado</p> : <p>No estas logeado</p>}</div>;
}

export default Home;
