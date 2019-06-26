import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const WeddingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 50px 0;

  img {
    width: 800px;
    height: 500px;
    padding: 0;
    margin: 0;
  }
`;

const Weddings = () => {
  return (
    <div>
      {/* //TODO: make this so the nav goes away and only this button shows */}
      <Link to="/">
        <button>Back</button>
      </Link>
      <WeddingWrap>
        <img alt="weddings" src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>
      <WeddingWrap>
        <img alt="weddings" src="https://images.pexels.com/photos/1464816/pexels-photo-1464816.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>{" "}
      <WeddingWrap>
        <img alt="weddings" src="https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>{" "}
      <WeddingWrap>
        <img alt="weddings" src="https://images.pexels.com/photos/1779491/pexels-photo-1779491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>
    </div>
  );
};

export default Weddings;
