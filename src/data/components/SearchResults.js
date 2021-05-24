import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
const SearchResults = props => {
  const [buttonId, setButtonId] = useState(-1);
  const [rowSelected, setRowSelect] = useState(null);
  const [indexCustomer, setIndexCustomer] = useState(null);

  console.log(props);
  const handleShowProfile = e => {
    e.preventDefault();
    setButtonId(e.target.id);
  };
  return (
    <>
      <table class="table table-striped">
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room id</th>
          <th>checkInDate</th>
          <th>checkOutData</th>
          <th>Customer Profile</th>
        </thead>
        <tbody>
          {props.results &&
            props.results.map((result, index) => {
              // var checkIn = <p>{result.checkInData.split(".")}</p>
              // var checkOut = <p>{result.checkOutData.split(".")}</p>

              return (
                <>
                  <tr
                    key={index}
                    onClick={() => {
                      rowSelected === index
                        ? setRowSelect(null)
                        : setRowSelect(index);
                    }}
                    style={{
                      backgroundColor: rowSelected === index && "aquamarine"
                    }}
                  >
                    <th scope="row">{result.id}</th>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.Email}</td>
                    <td>{result.RoomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutData}</td>
                    {/* <td>{checkOut.diff(checkIn, "days")}</td> */}
                    <td>
                      <button
                        id={result.id}
                        onClick={() => {
                          setIndexCustomer(result.id);
                        }}
                        onClick={handleShowProfile}
                      >
                        see
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>

      <CustomerProfile id={buttonId} info={indexCustomer} />
    </>
  );
};

export default SearchResults;
