import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Dropdown = styled.div`
  z-index: 999999;
  background-color: #222;
  color: #fff;

  li {
    text-decoration: none;
    color: #fff;
  }
`;

const NavWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: #222;
  color: #fff;
  height: 70px;
  z-index: 2;

  li {
    list-style: none;
    font-size: 1.2em;
    font-weight: 600;
    padding: 15px 15px;
    cursor: pointer;
  }

  li:hover {
    color: #888;
  }

  div {
    z-index: 1;
  }

  @media (max-width: 568px) {
    height: 60px;
    li {
      font-size: 0.8em;
    }
  }
`;

const Nav = props => {
  const [showMenu, setShowMenu] = useState(false);

  const mobileMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  const scrollTo = elementId => {
    document.querySelector(`#${elementId}`).scrollIntoView();
  };

  return (
    <NavWrap>
      <li onClick={() => scrollTo("about")}>ABOUT</li>
      <li onClick={() => scrollTo("contact")}>CONTACT</li>
      <div>
        <li onClick={() => mobileMenu()} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
          MY WORK ▼
        </li>
        {showMenu && (
          <Dropdown onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <Link to="/weddings">
              <li>WEDDINGS</li>
            </Link>
            <Link to="/corporate">
              <li>CORPORATE</li>
            </Link>
            <Link to="/promo">
              <li>PROMO</li>
            </Link>
            <Link to="/promo">
              <li>HOMECOMINGS</li>
            </Link>
          </Dropdown>
        )}
      </div>
    </NavWrap>
  );
};

export default Nav;
