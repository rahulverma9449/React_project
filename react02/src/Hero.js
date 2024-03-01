// Create component here to display the Basic information such as
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import React from "react";

const Hero = ({ name, email, phone, address }) => {
  return (
    <div className="hero">
      <h1>Name: Pranav Sharad Yeole</h1>
      <p>Email: Pranav@google.com</p>
      <p>Phone: 12345678910</p>
      <p>Address: ABC, xyz street</p>
    </div>
  );
};

export default Hero;
