import React, { useState, useEffect } from 'react';

const RedditDataDisplay = () => {
  const [redditData, setRedditData] = useState([]);

  useEffect(() => {
    // Fetch the Reddit JSON data
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((response) => response.json())
      .then((data) => setRedditData(data.data.children));
  }, []);

  return (
    <div>
      {redditData.map((post) => (
        <div
          key={post.data.id}
          style={{
            border: '1px solid #ddd',
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {post.data.title}
          </div>
          <div
            style={{
              fontSize: '14px',
              color: '#777',
            }}
          >
            Score: {post.data.score}
          </div>
          <div
            style={{
              fontSize: '14px',
              color: '#3498db',
            }}
          >
            <a
              href={post.data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
          <div
            style={{
              fontSize: '14px',
              color: '#555',
            }}
            dangerouslySetInnerHTML={{ __html: post.data.selftext_html }}
          />
        </div>
      ))}
    </div>
  );
};

export default RedditDataDisplay;
