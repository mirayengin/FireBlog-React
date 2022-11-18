import React from "react";
import LoginDiv from "./Login.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const localStorageKey = {
    username: "test@test.com",
    password: "123",
  };
  localStorage.setItem("LoginAuthor", JSON.stringify(localStorageKey));

  // console.log(JSON.parse(localStorage.getItem("LoginAuthor")));

  const eventHandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log("formstate:", form);

  const checked = () => {
    const storageData = JSON.parse(localStorage.getItem("LoginAuthor"));
    if (
      form.username !== storageData.username &&
      form.password !== storageData.password
    ) {
      return alert("Hata");
    }

    form.username !== storageData.username && alert("Invalid username");
    form.password !== storageData.password && alert("Invalid password");

    if (
      form.username === storageData.username &&
      form.password === storageData.password
    ) {
      navigate("/");
    }
  };

  return (
    <LoginDiv>
      <input
        type="email"
        name="username"
        placeholder="Username"
        onChange={eventHandleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={eventHandleChange}
      />
      <button onClick={checked}>Login</button>
    </LoginDiv>
  );
};

export default Login;
