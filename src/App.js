import React, { useState } from "react";
import "./App.css";
// import Hero from "./components/Hero";
// import FirstBlock from "./components/FirstBlock";
import Parallax from "./components/Parallax";
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

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const mobileMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <div className="App">
      {/* <NavWrap>
        <a href="/about">About</a>
        <li href="/contact">Contact</li>
        <div>
          <li onClick={() => mobileMenu()} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
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
      </NavWrap> */}
      <Parallax />
    </div>
  );
}

export default App;
