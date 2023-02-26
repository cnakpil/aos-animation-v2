import React from 'react';
import headerImg from './assets/assignments_dark.svg';
import './App.css';
// import Entries from './components/Entries';
import EntryList from './components/EntryList';

function App() {
  return (
    <div>
      <img src={headerImg} alt="Assignments" />
      <EntryList />
    </div>
  );
}

export default App;
