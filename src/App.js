import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import PastProjects from "./pages/PastProjects";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/pastProject" element={ <PastProjects /> } />
          </Routes>
        </div>

      </ParallaxProvider>
    </Router>
  );
}

export default App;
