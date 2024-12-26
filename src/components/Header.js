import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>News Website</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/sports">Sports</Link>
        <Link to="/category/politics">Politics</Link>
        <Link to="/category/business">business</Link>
        <Link to="/category/health">Health</Link>
        <Link to="/category/science">Science</Link>
      </nav>
    </header>
  );
};

export default Header;
