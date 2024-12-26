import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api';
import NewsList from '../components/NewsList';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      setArticles(news);
    };
    getNews();
  }, []);

  return (
    <div>
      <h2>Top Headlines</h2>
      <NewsList articles={articles} />
    </div>
  );
};

export default Home;
