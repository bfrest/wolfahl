import React, { useState } from "react";
import styled from "styled-components";
import "./parallax.css";
import { Link } from "@reach/router";

const Wrap = styled.div`
  #about {
    div {
      width: 40vw;
      /* background: rgba(255, 255, 255, 0.8); */
      font-size: 1.4em;
      padding: 20px;
      border-radius: 20px;
      color: #fff;
      font-weight: 800;
      /* position: fixed; */
      letter-spacing: 1px;
      line-height: 1.6em;

      h1 {
        text-align: center;
      }
    }
  }

  @media (max-width: 568px) {
    #about {
      div {
        width: 80vw;
        font-size: 0.9em;
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
          <h1>W O L F A H L</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* 
      <section className="section section-dark">
        <iframe src="https://res.cloudinary.com/bfrest/video/upload/v1559958732/wolfahl/Snow_sundance_official.mp4" />
      </section> */}

      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">Light Fest</span>
        </div>
      </div>

      {showMe && (
        <div className="section section-dark">
          <iframe src="https://drive.google.com/file/d/118OxK5qO8Os4umJecL7dK_C-pqjnLhVg/preview" width="640" height="480" />
        </div>
      )}

      <div className="pimg3">
        <div className="ptext">
          <span className="border trans">Cancun</span>
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
