import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>Our Universe is stunning! And it's a pity we don't see its beauty!</p>
      <p>
        This app is aiming to display incredible pictures of what is happening
      around our planet.
      </p>
      <p>
        The source is
        <a
          className="about"
          href="https://apod.nasa.gov/apod/astropix.html"
          target="blank"
        >
          {" "}
          APOD (Astronomy picture of the Day){" "}
        </a>
        website where we take the most spectacular picture of the day!
      </p>
    </div>
  );
};

export default About;
