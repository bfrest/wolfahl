import React from "react";
import Back from "./Back";
import styled from "styled-components";
import { Link } from "@reach/router";

const HomecomingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 50px 0;

  img,
  video {
    width: 800px;
    height: 500px;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 568px) {
    img,
    video {
      width: 80vw;
      height: auto;
    }
  }
`;

const Homecomings = () => {
  return (
    <div>
      {/*  make this so the nav goes away and only this button shows */}
      <Back />
      <HomecomingWrap>
        <img alt="Homecomings" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy3Y6jlf0MfuA66mEbH21wBCML6XGGbqQS2klJI4Vk7-1cjCdKA" />
        <h3>Kade Something</h3>
      </HomecomingWrap>
      <HomecomingWrap>
        <img alt="Homecomings" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbZnSKm4bfe1XYbIwxMcmUfS5_YarwRspdqScZdw9h7j-FHWuXA" />
        <h3>Anh ca khai</h3>
      </HomecomingWrap>
    </div>
  );
};

export default Homecomings;
