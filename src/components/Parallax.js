import React from "react";
import styled from "styled-components";
import "./parallax.css";

const Wrap = styled.div``;

const Parallax = () => {
  return (
    <Wrap>
      <div className="pimg1">
        <div className="ptext">
          <span className="border">Lets Talk</span>
        </div>
      </div>

      <section className="section section-light">
        <iframe width="70%" height="100%" src="https://res.cloudinary.com/bfrest/video/upload/v1559958732/wolfahl/Snow_sundance_official.mp4" />
      </section>

      <div className="pimg2">
        <p>hello</p>hi
      </div>

      <section className="section section-dark">
        <iframe width="200px" height="100px" src="" />
      </section>

      <div className="pimg3">
        <div className="ptext">
          <span className="border trans">Image Three Text</span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Three</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis
          consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates
          inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis
          voluptatem doloremque fugiat dolor repellendus ratione in.
        </p>
      </section>

      <div className="pimg1">
        <div className="ptext">
          <span className="border">Lets Talks</span>
        </div>
      </div>
    </Wrap>
  );
};

export default Parallax;
