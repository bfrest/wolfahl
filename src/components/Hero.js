import React from "react";
import styled from "styled-components";

const HeroWrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;

  img {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }
`;

const Hero = () => {
  // const pauseVid = () => {
  //   // create a function that will pause the video at 12 seconds after the video starts
  // };

  return (
    <HeroWrap>
      <img src="https://res.cloudinary.com/bfrest/image/upload/v1559784164/Screen_Shot_2019-06-05_at_7.21.29_PM.png" alt="mountains" />
    </HeroWrap>
  );
};

export default Hero;
