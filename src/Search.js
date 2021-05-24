import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState();

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  const handleSubmit = event => {
    event.preventDefault();
    search = searchInput;
    console.log(search);
  };

  return (
    <>
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box">
              <label htmlFor="customerName">Customer name</label>
              <label htmlFor="customerId">Customer id</label>

              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer name"
                />
              </div>
              <div className="search-row">
                <input
                  type="number"
                  id="customerId"
                  className="form-control"
                  placeholder="Customer id"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <SearchButton
        searchInput={searchInput}
        whenKeyup={handleSearchInput}
        whenClick={handleSubmit}
      />
    </>
  );
};

export default Search;
