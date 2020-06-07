import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const {username, setUsername} = useState('Maggaba');

  return (
    <div className="App">
      <h1>welcome to vg gruppen</h1>
      <h2>This is the MVG</h2>
      <h3>bärs ä gött</h3>
      <p>hello {username}</p>
    </div>
  );
}

export default App;
