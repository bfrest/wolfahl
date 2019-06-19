import React, { useState } from "react";
import styled from "styled-components";
import "./parallax.css";

const Wrap = styled.div``;

const Parallax = () => {
  const [showMe, setShowMe] = useState(false);

  const toggleShow = () => {
    // TODO: make this add or remove a class on whatever element was clicked
    // TODO: it should also have an animation for when the button gets clicked
    showMe === false ? setShowMe(true) : setShowMe(false);
  };

  return (
    <Wrap>
      <div className="pimg1" />

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
        <form>
          <h1>Let's Connect</h1>
          <input placeholder="Email" type="text" />
          <input placeholder="Name" type="text" />
          <textarea placeholder="Description" />
        </form>
      </div>
    </Wrap>
  );
};

export default Parallax;
