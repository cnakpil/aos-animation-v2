import React from 'react';
import headerImg from './assets/assignments_dark.svg';
import './App.css';
import Entries from './components/Entries';

function App() {
  return (
    <div>
      <img src={headerImg} alt="Assignments" />
      <Entries />
    </div>
  );
}

export default App;
