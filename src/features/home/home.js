// import React from "react";

const Home = ({ text: news, int: dates }) => {
 
  let properDates = [];

  for(let i = 0; i < dates.length; i++){
    
      for(let j = 0; j < news.length; j++){
        if(dates[i].id === news[j].id){
          properDates.push(dates[i]);
        }
      }
    
  }
  
  
  const newsBlock = news.map((item, idx) => {
    return (
      <div key={idx} className="news-card">
        <div className="news-date">{properDates[idx].info}</div>
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
