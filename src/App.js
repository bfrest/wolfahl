import React, { useState } from "react";
import "./App.css";
// import Hero from "./components/Hero";
// import FirstBlock from "./components/FirstBlock";
import Parallax from "./components/Parallax";
import styled from "styled-components";
import { Router, Location } from "@reach/router";
import Weddings from "./components/Weddings";
import Nav from "./components/Nav";
import Corporate from "./components/Corporate";
import Promo from "./components/Promo";
import Homecomings from "./components/Homecomings";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <Location>{/* {({ location }) => {
          if (location.pathname === "/") {
            return <Nav />;
          }
        }} */}</Location>
      <Router>
        <Parallax path="/" />
        <Weddings path="/weddings" />
        <Corporate path="/corporate" />
        <Promo path="/promo" />
        <Homecomings path="/homecomings" />
      </Router>
    </div>
  );
}

export default App;
