import React from "react";

const Home = ({ news, dates }) => {
  console.log("Home rendered");
  const newsBlock = news.map((item, idx) => {
    return (
      <div key={idx}>
        <div>{dates[idx]}</div>
        <div>{item}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Home</h1>
      {newsBlock}
    </div>
  );
};

export default Home;
