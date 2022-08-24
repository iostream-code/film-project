import './App.css';
import Navbar from "./components/NavigationBar";
import Intro from "./components/Intro";
import "./style/landingPage.css";


function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <Navbar />
        <Intro />
      </div>
      {/* end of intro section */}
    </div>
  );
}

export default App;
