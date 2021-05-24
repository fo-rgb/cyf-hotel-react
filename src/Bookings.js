import React, { useState, useEffect } from "react";
import Search from "./Search.js";

//  import fakeBookings from "./data/fakeBookings.json";
import SearchResults from "./data/components/SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const API = new URL("https://cyf-react.glitch.me");

  const search = searchVal => {
    const searchByFirstName = bookings.filter(
      customer => customer.firstName === searchVal
    );
    setBookings(searchByFirstName);
  };
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  console.log(bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={Search} />
        <SearchResults results={bookings} />

        {console.log(search)}
      </div>
    </div>
  );
};

export default Bookings;
// useEffect(() => {
//   const fetchData = async () => {
//     const response = fetch(`https://cyf-react.glitch.me`)
//     const data = response.json();
//     setBookings(data);
//   }
//   fetchData();
// }, [])
