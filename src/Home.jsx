import './App.css';
import React from 'react';
import Sidebar from './sidebar';
import MainContent from './Maincontent';

function Home() {
  return (
    <div className="app-container">
    <Sidebar />
    <MainContent />
  </div>
  );
}

export default Home;