import React from "react";
import { Link } from "@reach/router";
const Promo = () => {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
        <img src="https://images.pexels.com/photos/34639/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="promo" />
      </Link>
      Promo
    </div>
  );
};

export default Promo;
