import React, { Component } from "react";
import "./styles.css";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h3>NFTium is the best place to find cool and unique NFTs </h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5_dwCAGtcyTfZpDC6NhEmplbAWzZtuj5Mb1GCJpSrA&s"
          alt="nft"
        />
      </div>
    );
  }
}

export default Hero;
