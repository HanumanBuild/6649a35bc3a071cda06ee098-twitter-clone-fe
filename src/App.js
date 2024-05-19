import React from 'react';
import './App.css';
import Timeline from './Timeline';
import TweetForm from './TweetForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Clone</h1>
      </header>
      <TweetForm />
      <Timeline />
    </div>
  );
}

export default App;