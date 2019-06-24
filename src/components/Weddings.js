import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const WeddingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 20px 0;

  iframe {
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
        <iframe src="https://res.cloudinary.com/bfrest/image/upload/v1560109043/wolfahl/Screen_Shot_2019-06-09_at_1.35.41_PM.png" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>
      <WeddingWrap>
        <iframe src="https://res.cloudinary.com/bfrest/image/upload/v1560109043/wolfahl/Screen_Shot_2019-06-09_at_1.35.41_PM.png" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>{" "}
      <WeddingWrap>
        <iframe src="https://res.cloudinary.com/bfrest/image/upload/v1560109043/wolfahl/Screen_Shot_2019-06-09_at_1.35.41_PM.png" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>{" "}
      <WeddingWrap>
        <iframe src="https://res.cloudinary.com/bfrest/image/upload/v1560109043/wolfahl/Screen_Shot_2019-06-09_at_1.35.41_PM.png" />
        <h3>Name Of Couple</h3>
      </WeddingWrap>
    </div>
  );
};

export default Weddings;
