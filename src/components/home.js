import React from "react";

const Home = (props) => {
  console.log(props.date);
  console.log(props.info);

  return (
    <div>
      <h1>Home</h1>
      {/* <p>{props.date[0]}</p> */}
      {/* <p>{props.info[0]}</p> */}
    </div>
  );
};

export default Home;
