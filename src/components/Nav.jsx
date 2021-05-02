import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  //   const location = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Saar Cohen
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 1;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300) {
    flex-direction: column;
    padding: 2rem 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
    #logo {
      display: inline-block;
      margin: 2rem;
    }
  }
`;
export default Nav;
