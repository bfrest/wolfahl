import React, { useState } from "react";
import styled from "styled-components";
import "./parallax.css";
import { Link } from "@reach/router";

const Wrap = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  #about {
    display: flex;
    flex-direction: column;
    div {
      width: 50vw;
      /* background: rgba(255, 255, 255, 0.7); */
      font-size: 1.7em;
      padding: 20px;
      border-radius: 10px;
      color: #fff;
      font-weight: 900;
      /* position: fixed; */
      letter-spacing: 1px;
      line-height: 1.3em;
      text-align: center;

      h1 {
        text-align: center;
      }
    }
    img {
      height: 60px;
    }
  }

  @media (max-width: 568px) {
    #about {
      div {
        width: 90vw;
        font-size: 1.3em;
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
      <div className="pimg1 firstImg" id="about">
        <div>
          <p>My name is Caileb & I'm owner of</p>
          <h3>WOLFAHL CO.</h3>
          <p>Here on my site you'll find what my life is all about</p>
        </div>
        <a href="https://www.instagram.com/cailebwolfahl/">
          <img src="https://image.flaticon.com/icons/svg/733/733558.svg" alt="instagram" />
        </a>
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

      <div className="pimg4 bottom">
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
