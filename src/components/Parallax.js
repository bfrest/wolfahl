import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  .parallax {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .parallax1 {
    background-image: url("https://images.pexels.com/photos/2376194/pexels-photo-2376194.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500");
  }

  .parallax2 {
    background-image: url("https://images.pexels.com/photos/2170473/pexels-photo-2170473.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500");
  }

  .parallax3 {
    background-image: url("https://images.pexels.com/photos/2387875/pexels-photo-2387875.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500");
  }
`;

const Parallax = () => {
  return (
    <Wrap>
      <div className="parallax parallax1">
        <div className="content">
          <h2>hi</h2>
          <h4>hi</h4>
        </div>
      </div>

      <div className="parallax parallax2">
        <div className="content">
          <h2>hi</h2>
          <h4>hi</h4>
        </div>
      </div>

      <div className="parallax parallax3">
        <div className="content">
          <h2>hi</h2>
          <h4>hi</h4>
        </div>
      </div>
    </Wrap>
  );
};

export default Parallax;
