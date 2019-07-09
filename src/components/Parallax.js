import React, { useState } from "react";
import styled from "styled-components";
import "./parallax.css";
import { Link } from "@reach/router";
import Nav from "./Nav";

const Wrap = styled.div`
  #about {
    display: flex;
    flex-direction: column;
    div {
      font-size: 2em;
      padding: 20px;
      border-radius: 10px;
      color: #fff;
      font-weight: 900;
      /* position: fixed; */
      line-height: 1em;
      text-align: center;
      letter-spacing: 1px;
    }
    img {
      height: 60px;
    }
  }

  @media (max-width: 568px) {
    #about {
      div {
        width: 100%100rem;
        font-size: 1.3em;
        margin-top: -470px;
        color: #000;
      }
      img {
        bottom: 0;
        right: 0;
        position: fixed;
        z-index: 15;
      }
    }
  }
`;

const Vid = styled.iframe`
  height: 100%;
  width: 400px;
`;

const Parallax = () => {
  const [showMe, setShowMe] = useState(false);

  const toggleShow = () => {
    // TODO: make this add or remove a class on whatever element was clicked
    // TODO: it should also have an animation for when the button gets clicked
    showMe === false ? setShowMe(true) : setShowMe(false);
  };

  // const scrollTo = elementId => {
  //   document.querySelector(`#${elementId}`).scrollIntoView();
  // };

  return (
    <Wrap>
      <Nav />
      <div className="pimg1 firstImg" id="about">
        <div>
          <p>My name is Caileb & I'm owner of</p>
          <p>WOLFAHL CO.</p>
          <p>Here on my site you'll find what my life is all about</p>
        </div>
        <a href="https://www.instagram.com/cailebwolfahl/">{<img src="https://image.flaticon.com/icons/svg/733/733558.svg" alt="instagram" />}</a>
      </div>

      {/* 
      <section className="section section-dark">
        <iframe src="https://res.cloudinary.com/bfrest/video/upload/v1559958732/wolfahl/Snow_sundance_official.mp4" />
      </section> */}

      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">Weddings</span>
        </div>
      </div>

      <div className="pimg3">
        <div className="ptext">
          <span className="border trans">Promo</span>
        </div>
      </div>

      <div className="pimg1 bottom">
        <form id="contact">
          <h1>Let's Connect</h1>
          <input placeholder="Email" type="text" />
          <input placeholder="Name" type="text" />
          <textarea />
        </form>
      </div>
    </Wrap>
  );
};

export default Parallax;
