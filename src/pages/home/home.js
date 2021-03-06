// import React from "react";

const Home = ({ text: news, int: dates }) => {
 
  const newsBlock = news.map((item, idx) => {
    return (
      <div key={idx} className="news-card">
        <div className="news-date">{dates[idx].info}</div>
        <div className="news-text">{item.info}</div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="news-h1">Home</h1>
      {newsBlock}
    </div>
  );
};

export default Home;
