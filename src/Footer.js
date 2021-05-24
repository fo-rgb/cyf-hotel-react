import React from "react";

function Footer() {
  let footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div id="footerId">
      <footer className="footer">
        {footerArray.map(element => (
          <p>{element}</p>
        ))}
      </footer>
    </div>
  );
}

export default Footer;
