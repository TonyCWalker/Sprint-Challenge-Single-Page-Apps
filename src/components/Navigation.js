import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
`;

export default function Nav() {
  return (
    <NavContainer>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </NavContainer>
  );
}