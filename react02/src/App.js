import React, { Component } from "react";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Hero
          name="Your Name"
          email="your@email.com"
          phone="123-456-7890"
          address="Your Address"
        />
        <Skills skills={["HTML", "CSS", "JavaScript", "React", "Node"]} />
        <About description="Hi, my name is Rahul. I am a full stack web developer and I have developed serveral projects with MERN stack. I am also familiar with Python and Django." />
      </div>
    );
  }
}

export default App;
