import './App.css';
import Navbar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import FilmList from "./components/FilmList";
import "./style/landingPage.css";


function App() {
  return (
    <div>
      <Navbar />
      {/* intro section */}
      <div id="home" className="myBG">
        <Intro />
      </div>
      {/* end of intro section */}
      <Trending />
      <FilmList />
    </div>
  );
}

export default App;
