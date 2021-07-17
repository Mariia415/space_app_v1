export const NewsCard = ({ day, news }) => {
  return (
    <div className="news-card">
      <div className="news-date">{day}</div>
      <div className="news-text">{news}</div>
    </div>
  );
};
