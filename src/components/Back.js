import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Wrap = styled.div`
  width: 80px;
  position: fixed;
  margin-left: 30px;

  @media (max-width: 568px) {
    width: 40px;
    margin: -55px 0 0 15px;
  }
`;

const Back = () => {
  return (
    <Wrap>
      <Link to="/">
        <svg className="back" viewBox="0 0 208 133" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.57712 60.7006C-0.901919 64.2507 -0.844361 69.9489 2.70568 73.4279L60.5569 130.122C64.107 133.601 69.8052 133.544 73.2842 129.994C76.7632 126.444 76.7057 120.745 73.1556 117.266L21.7323 66.8714L72.1272 15.4481C75.6062 11.8981 75.5486 6.19986 71.9986 2.72082C68.4486 -0.758221 62.7504 -0.700663 59.2713 2.84938L2.57712 60.7006ZM206.904 56.0005L8.91413 58.0004L9.09594 75.9995L207.086 73.9996L206.904 56.0005Z"
            fill="black"
          />
        </svg>
      </Link>
    </Wrap>
  );
};

export default Back;
