import React from "react";

function SearchButton() {
  return (
    <>
      <div>
        <button
          onClick={e => {
            e.preventDefault();
            console.log(e.target.value);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchButton;
