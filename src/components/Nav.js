import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  z-index: 999999;
  background-color: #222;
  color: #fff;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: #222;
  color: #fff;
  height: 90px;

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
    li {
      font-size: 0.8em;
    }
  }
`;

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavWrap>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <div>
        <li onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
          Categories ▼
        </li>
        {showMenu && (
          <Dropdown onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <li>Corporate</li>
            <li>Promo</li>
            <li>Weddings</li>
          </Dropdown>
        )}
      </div>
    </NavWrap>
  );
};

export default Nav;
