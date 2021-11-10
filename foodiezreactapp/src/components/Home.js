import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <section id="home">
      <div className="hero-image">
        <div className="hero-text fade-in-text text-size">
          <h3 className="home-title"> WELCOME TO FOODIEZ!</h3>
          <br />
          <hr />
          <br />
          <h6>Your all-in-one website for all things kitchen!</h6>
          <br />
          <p>One recipe at a time...</p>
        </div>
      </div>
    </section>
  );
}
