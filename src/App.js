import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Tour from "./components/TourList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Tour />
    </div>
  );
}

export default App;
