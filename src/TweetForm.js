import React, { useState } from 'react';
import axios from 'axios';

function TweetForm() {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(process.env.TWITTER_CLONE_BE_URL + '/tweets', { content })
      .then(response => {
        console.log('Success:', response.data);
        setContent('');
        // Optionally trigger a refresh of tweets in the Timeline component
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Tweet
      </button>
    </form>
  );
}

export default TweetForm;