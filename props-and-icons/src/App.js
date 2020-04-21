import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const articles = ['1', '2', '3'];

function App() {
  return (
    <div className="App">
      Bookmark: <FontAwesomeIcon style={{
        color: 'green',
        fontSize: '30px'
      }} icon={faBookmark} />
      {articles.map((article, idx) => {
        return (
          <div className={`article-${idx}`}>{article}</div>
        );
      })}
    </div>
  );
}

export default App;
