import './App.css';
import headerImg from './assets/assignments_dark.svg';
import EntryList from './components/EntryList';

// Import Animation on Scroll Library
import AOS from "aos";
import "aos/dist/aos.css";

// Start AOS Library
AOS.init();

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
