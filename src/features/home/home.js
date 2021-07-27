import React from "react";

const Home = ({ news, dates }) => {
  const newsBlock = news.map((item, idx) => {
    return (
      <div key={idx} className="news-card">
        <div className="news-date">{dates[idx]}</div>
        <div className="news-text">{item}</div>
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
