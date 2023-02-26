import './App.css';
import headerImg from './assets/assignments_dark.svg';
import EntryList from './components/EntryList';

function App() {
  return (
    <div>
      <p>This page is an exercise to practice mapping data from json, reusable components, conditional rendering, and applying the Animate on Scroll library.</p>
      <hr />
      <img src={headerImg} alt="Assignments" />
      <EntryList />
      <footer></footer>
    </div>
  );
}

export default App;
