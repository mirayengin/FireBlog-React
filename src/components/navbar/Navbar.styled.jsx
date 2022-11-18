import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
`;

export const NavbarImg = styled.img`
  width: 150px;
`;
