import React from "react";
import { NewsCard } from "./newsCard";
import { newsNumber } from "../../sensitiveData";

const Home = ({ date, info }) => {
  console.log(date);
  console.log(info);
  const gettingNews = (day, news) => {
    const newsBlock = [];
    if (date && info) {
      for (let i = 0; i < newsNumber; i++) {
        newsBlock.push(<NewsCard key={i} day={day[i]} news={news[i]} />);
      }
      return newsBlock;
    }
    return <div>Wait...</div>;
  };

  return (
    <div>
      <h1>Home</h1>
      {gettingNews(date, info)}
    </div>
  );
};

export default Home;
