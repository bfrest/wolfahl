import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Dropdown = styled.div`
  z-index: 999999;
  background-color: #b9b9b9;
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
  background-color: #b9b9b9;
  color: #fff;
  height: 100px;
  z-index: 2;

  img {
    height: 100px;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -30px;
  }

  li {
    list-style: none;
    font-size: 1.2em;
    font-weight: 600;
    padding: 15px 15px;
    margin-top: 15px;
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

    img {
      height: 60px;
      width: 120px;
    }

    li {
      font-size: 0.8em;
      margin-top: 5px;
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
      <img src="https://res.cloudinary.com/bfrest/image/upload/f_auto/v1565653479/wolfahl/asdf.psd" />
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
            <Link to="/homecomings">
              <li>HOMECOMINGS</li>
            </Link>
          </Dropdown>
        )}
      </div>
    </NavWrap>
  );
};

export default Nav;
