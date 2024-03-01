// Create About component here to display the a small content here.
// In this component use paragraph tag (p) to display the content
import React from "react";

const About = ({ description }) => {
  return (
    <div className="about">
      <p> {description}</p>
    </div>
  );
};

export default About;
