import React from "react";
import Form from "./Form";
import HeaderStyle from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Food App</h1>
      <Form />
    </HeaderStyle>
  );
};

export default Header;
