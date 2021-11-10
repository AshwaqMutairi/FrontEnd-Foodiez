import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <section id="home">
      <div className="hero-image">
        <div className="hero-text fade-in-text text-size">
          <h1 className="home-title"> Weclome to Foodiez!</h1>
          <br />
          <hr />
          <br />
          <h3>Your all-in-one website for all things kitchen!</h3>
          <br />
          <h4>One recipe at a time...</h4>
        </div>
      </div>
    </section>
  );
}
