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

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const mobileMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  const scrollTo = elementId => {
    document.querySelector(`#${elementId}`).scrollIntoView();
  };

  return (
    <NavWrap>
      <li onClick={() => scrollTo("about")}>About</li>
      <li onClick={() => scrollTo("contact")}>Contact</li>
      <div>
        <li onClick={() => mobileMenu()} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
          Categories ▼
        </li>
        {showMenu && (
          <Dropdown onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <Link to="/weddings">
              <li>Weddings</li>
            </Link>
            <Link to="/corporate">
              <li>Corporate</li>
            </Link>
            <Link to="/promo">
              <li>Promo</li>
            </Link>
          </Dropdown>
        )}
      </div>
    </NavWrap>
  );
};

export default Nav;
