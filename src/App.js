import React from 'react';
import MyPortfolio from './MyPortfolio';
import './App.css';
import CompanyData from './Data/mockData.json';


function App() {
  return (
    <div className="App">
     <MyPortfolio CompanyData={CompanyData}/>
    </div>
  );
}

export default App;
