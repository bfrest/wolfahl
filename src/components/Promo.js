import React from "react";
import Back from "./Back";
import { Link } from "@reach/router";
import styled from "styled-components";

const PromoWrap = styled.div`
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
const Promo = () => {
  return (
    <div>
      <Back />
      <PromoWrap>
        <video controls preload>
          <source src="https://res.cloudinary.com/bfrest/video/upload/v1560092162/wolfahl/MVI_5821.mp4" />
        </video>

        <h2>Light Fest</h2>
      </PromoWrap>
      <PromoWrap>
        <img src="https://images.pexels.com/photos/938971/pexels-photo-938971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h2>Check This out</h2>
      </PromoWrap>
      <PromoWrap>
        <img src="https://images.pexels.com/photos/415471/pexels-photo-415471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h2>Company C</h2>
      </PromoWrap>
      <PromoWrap>
        <img src="https://images.pexels.com/photos/35884/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h2>Dope Company Video</h2>
      </PromoWrap>
    </div>
  );
};

export default Promo;
