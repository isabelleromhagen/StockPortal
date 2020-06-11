import React from 'react';
import MyPortfolio from './MyPortfolio';
import './App.css';
import Sidebar from './Sidebar';
import CompanyData from './Data/mockData.json';



function App() {

  return (
    <div className="App">
    <Sidebar/>
      <h1 id="current_view">welcome to vg gruppen</h1>
      <h2>This is the MVG</h2>
      <h3>bärs ä gött</h3>
      
    </div>
  );
}

export default App;
