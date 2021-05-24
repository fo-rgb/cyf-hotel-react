import React from "react";
import "./App.css";
import Card from "./Card";

import Bookings from "./Bookings";

import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>

      <Card />
      <Bookings />
      <Restaurant />
      <Footer />
      {/* <SearchResults />   */}
    </div>
  );
};

export default App;

// class App extends React.Component() {
//   constructor() {
//     super()

//     this.state = {
//       name: "Moussa",
//       age: 29
//     }
//   }
//   render() {
//     return (

//         <div className="App">
//         <header className="App-header">CYF Hotel</header>
//         <Heading />
//         <TouristInfoCards />
//           <Bookings />
//           </div>
//     )
//   }
// }

// export default App;
