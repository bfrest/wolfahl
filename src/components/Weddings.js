import React from "react";
import Back from "./Back";
import styled from "styled-components";
import { Link } from "@reach/router";

const WeddingWrap = styled.div`
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

const Weddings = () => {
  return (
    <div>
      {/*  make this so the nav goes away and only this button shows */}
      <Back />
      <WeddingWrap>
        <video controls preload>
          <source src="https://res.cloudinary.com/bfrest/video/upload/v1561905055/wolfahl/Anna_Kade_4.mov" />
        </video>
        <h3>Anna & Kade</h3>
      </WeddingWrap>
      <WeddingWrap>
        <img alt="weddings" src="https://images.pexels.com/photos/1464816/pexels-photo-1464816.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>
      <WeddingWrap>
        <img alt="weddings" src="https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>
      <WeddingWrap>
        <img alt="weddings" src="https://images.pexels.com/photos/1779491/pexels-photo-1779491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>
    </div>
  );
};

export default Weddings;
