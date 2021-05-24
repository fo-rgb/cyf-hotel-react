import React, { useState } from "react";

function RestaurantButton() {
  const [salada, setSalada] = useState(0);
  return (
    <>
      <p>SALADAS :{salada}</p>
      <button
        onClick={() => {
          setSalada(salada + 1);
        }}
      >
        add
      </button>
    </>
  );
}

export default RestaurantButton;
