import React, { useState } from "react";
import styled from "styled-components";
import "./parallax.css";

const Wrap = styled.div`
  #about {
    div {
      width: 40vw;
      background: rgba(255, 255, 255, 0.8);
      font-size: 1.3em;
      padding: 30px;

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

const Dropdown = styled.div`
  z-index: 999999;
  background-color: #222;
  color: #fff;
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

const Parallax = () => {
  const [showMe, setShowMe] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const mobileMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const toggleShow = () => {
    // TODO: make this add or remove a class on whatever element was clicked
    // TODO: it should also have an animation for when the button gets clicked
    showMe === false ? setShowMe(true) : setShowMe(false);
  };

  const scrollTo = elementId => {
    document.querySelector(`#${elementId}`).scrollIntoView();
  };

  return (
    <Wrap>
      <NavWrap>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
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
      </NavWrap>
      <div className="pimg1 firstImg" id="about">
        <div>
          <h1>WOLFAHL</h1>
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
        <div className="ptext" onClick={() => toggleShow()}>
          <span className="border trans">Light Fest</span>
        </div>
      </div>

      {showMe && (
        <div className="section section-dark">
          <video>
            <source src="https://res.cloudinary.com/bfrest/video/upload/v1560092162/wolfahl/MVI_5821.mp4" />
          </video>

          <video>
            <source src="https://res.cloudinary.com/bfrest/video/upload/v1560092162/wolfahl/MVI_5821.mp4" />
          </video>

          <video>
            <source src="https://res.cloudinary.com/bfrest/video/upload/v1560092162/wolfahl/MVI_5821.mp4" />
          </video>

          <video>
            <source src="https://res.cloudinary.com/bfrest/video/upload/v1560092162/wolfahl/MVI_5821.mp4" />
          </video>
        </div>
      )}

      <div className="pimg3">
        <div className="ptext" onClick={() => toggleShow()}>
          <span className="border trans">Cancun</span>
        </div>
      </div>

      {/* <section className="section section-dark">
        <img src="https://res.cloudinary.com/bfrest/image/upload/v1560109072/wolfahl/Screen_Shot_2019-06-09_at_1.36.16_PM.png" alt="cancun" />

        <img src="https://res.cloudinary.com/bfrest/image/upload/v1560109056/wolfahl/Screen_Shot_2019-06-09_at_1.35.24_PM.png" alt="cancun" />

        <img src="https://res.cloudinary.com/bfrest/image/upload/v1560109043/wolfahl/Screen_Shot_2019-06-09_at_1.35.41_PM.png" alt="cancun" />

        <img src="https://res.cloudinary.com/bfrest/image/upload/v1560109072/wolfahl/Screen_Shot_2019-06-09_at_1.36.16_PM.png" alt="cancun" />
      </section> */}

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
