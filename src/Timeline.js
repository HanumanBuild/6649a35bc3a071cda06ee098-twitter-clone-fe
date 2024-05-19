import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Timeline() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get(process.env.TWITTER_CLONE_BE_URL + '/tweets')
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => {
        console.error('Error fetching tweets:', error);
      });
  }, []);

  return (
    <div className="space-y-4">
      {tweets.map(tweet => (
        <div key={tweet.id} className="p-4 max-w-xl mx-auto bg-white rounded-lg shadow">
          <p>{tweet.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Timeline;