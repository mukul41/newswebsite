import React from 'react';

const NewsItem = ({ title, description, url, imageUrl }) => {
  return (
    <div className="news-item">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsItem;
