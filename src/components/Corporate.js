import React from "react";
import Back from "./Back";
import styled from "styled-components";
import { Link } from "@reach/router";

const CorpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 80px 0;

  img {
    width: 800px;
    height: 500px;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 568px) {
    img {
      width: 80vw;
      height: auto;
    }
  }
`;

const Corporate = () => {
  return (
    <div>
      <Back />
      <CorpWrap>
        <img src="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h2>Company A</h2>
      </CorpWrap>
      <CorpWrap>
        <img src="https://images.pexels.com/photos/533189/pexels-photo-533189.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" />
        <h2>Cool Company</h2>
      </CorpWrap>
      <CorpWrap>
        <img src="https://images.pexels.com/photos/1162968/pexels-photo-1162968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h2>Company B</h2>
      </CorpWrap>
      <CorpWrap>
        <img src="https://images.pexels.com/photos/273214/pexels-photo-273214.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <h2>The Last Cool Company</h2>
      </CorpWrap>
      Corp
    </div>
  );
};

export default Corporate;
