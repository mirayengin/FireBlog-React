import React from "react";
import home from "../../assets/home.svg";
import { NavbarImg, NavbarLink, NavbarStyle } from "./Navbar.styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarStyle>
      <div>
        <NavbarImg src={home} alt="logo" onClick={() => navigate("/")} />
      </div>

      <div>
        <ul>
          <NavbarLink to="/">HOME</NavbarLink>
          <NavbarLink to="/about">ABOUT</NavbarLink>
          <NavbarLink to="/login">LOGOUT</NavbarLink>
        </ul>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
