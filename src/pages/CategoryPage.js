import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews(category);
      setArticles(news);
    };
    getNews();
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} News</h2>
      <NewsList articles={articles} />
    </div>
  );
};

export default CategoryPage;
