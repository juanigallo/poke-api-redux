import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../store";
import { useHistory } from "react-router-dom";

function Login() {
  const [userData, setUserData] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  function handleChange(name, value) {
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleClick() {
    const correctUser = "juani";
    const correctPassword = "juani123";
    const { user, password } = userData;

    if (user == correctUser && password == correctPassword) {
      dispatch(updateUserData(true));
      history.push("/");
    } else {
      dispatch(updateUserData(false));
    }
  }

  return (
    <div>
      <div>
        <Input label="Usuario" onChange={handleChange} name="user" />
      </div>
      <div>
        <Input label="Contraseña" onChange={handleChange} name="password" />
      </div>
      <div>
        <Button label="Log in" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Login;
