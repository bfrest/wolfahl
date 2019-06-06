import React from "react";
import styled from "styled-components";

const Block = styled.div`
  height: 80vh;
  width: 100vw;
  background: #fff;
`;

const FirstBlock = () => {
  return (
    <Block>
      <p>hello</p>
    </Block>
  );
};

export default FirstBlock;
