import React, { useState } from "react";
import RestaurantButton from "./RestaurentButton";

const Restaurant = () => {
  const [pizza, setPizza] = useState(0);
  return (
    <>
      <div id="restauButton">
        <h3>Restaurant Orders</h3>

        <p>PiZZA :{pizza}</p>
        <button
          onClick={() => {
            setPizza(pizza + 1);
          }}
        >
          add
        </button>
        <RestaurantButton />
      </div>
    </>
  );
};

export default Restaurant;
