import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState();

  const handleSearchInput = event => {
    event.preventDefault();
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  const handleSubmit = event => {
    let search = searchInput;
    event.preventDefault();
    console.log(search);
    props.search(searchInput);
  };

  return (
    <>
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box" onSubmit={handleSubmit}>
              <label htmlFor="customerName">Customer name</label>
              {/* <label htmlFor="customerId">Customer id</label> */}

              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer name"
                  value={searchInput}
                  onChange={handleSearchInput}
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
