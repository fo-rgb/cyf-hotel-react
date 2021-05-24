import React, { useState, useEffect } from "react";
function CustomerProfile(props) {
  const [customerData, setCustomerData] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.info}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, [props.info]);

  if (customerData?.id) {
    return (
      <div className="card">
        <div className="card body">
          <h5 className="card-title">
            {customerData.firstName} {customerData.surname}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {customerData.email}
          </h6>
          <p className="card-text">VIP:{customerData.vip}</p>
          <p className="card-text">Phone Number:{customerData.phoneNumber}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
