import React from 'react';
import './styling/App.css';
import Sidebar from './loggedIn/sidebar/Sidebar';
import CompanyData from './data/mockData.json';



function App() {

  return (
    <div className="App">
    <Sidebar/>
      <h1 id="current_view">welcome to vg gruppen</h1>
    </div>
  );
}

export default App;
