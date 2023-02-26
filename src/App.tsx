import './App.css';
import headerImg from './assets/assignments_dark.svg';
import EntryList from './components/EntryList';

function App() {
  return (
    <div>
      <img src={headerImg} alt="Assignments" />
      <EntryList />
      <footer></footer>
    </div>
  );
}

export default App;
