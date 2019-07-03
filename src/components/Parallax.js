import React, { useState } from "react";
import styled from "styled-components";
import "./parallax.css";
import { Link } from "@reach/router";

const Wrap = styled.div`
  #about {
    div {
      width: 50vw;
      background: rgba(255, 255, 255, 0.8);
      font-size: 1.2em;
      padding: 20px;
      border-radius: 10px;
      color: #222;
      font-weight: 800;
      /* position: fixed; */
      letter-spacing: 1px;
      line-height: 1.3em;

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
          <br />
          <p>
            I’m Caileb! The most preppy, Chinese speaking, cowboy you’ll ever meet. I live in the stunning state of Utah. Currently located in Salt Lake City, with my beautiful
            wife and our Yorkie Grizz. ( be careful he’ll bite your head off 😉)
          </p>
          <p> What inspired me to become a videographer....... I love being able to record a person’s most memorable moments and letting them relive them through videography.</p>
          <p>
            When I’m not behind a camera, I’m usually in the mountains riding my horse or cruising down the streets on my motorcycle. I love being adventurous and am a huge
            advocate of traveling!
          </p>
          <p>I love meeting new people and want to meet you! I would love to help capture your memories and help you relive them. Let’s create!</p>
        </div>
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

      {showMe && (
        <div className="section section-dark">
          <iframe src="https://drive.google.com/file/d/118OxK5qO8Os4umJecL7dK_C-pqjnLhVg/preview" width="640" height="480" />
        </div>
      )}

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
