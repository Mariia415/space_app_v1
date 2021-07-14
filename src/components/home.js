import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <p>{props.date}</p>
      <p>{props.title}</p>
    </div>
  );
};

export default Home;
