import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;