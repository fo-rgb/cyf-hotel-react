import React from "react";

function SearchButton() {
  return (
    <>
      <div>
        <button
          onClick={e => {
            console.log(e);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchButton;
