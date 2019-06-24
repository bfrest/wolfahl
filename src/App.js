import React, { useState } from "react";
import "./App.css";
// import Hero from "./components/Hero";
// import FirstBlock from "./components/FirstBlock";
import Parallax from "./components/Parallax";
import styled from "styled-components";
import { Router } from "@reach/router";
import Weddings from "./components/Weddings";
import Nav from "./components/Nav";
import Corporate from "./components/Corporate";
import Promo from "./components/Promo";

function App() {
  const [showMenu, setShowMenu] = useState(false);

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
      <Nav />
      <Router>
        <Parallax path="/" />
        <Weddings path="/weddings" />
        <Corporate path="/corporate" />
        <Promo path="/promo" />
      </Router>
    </div>
  );
}

export default App;
