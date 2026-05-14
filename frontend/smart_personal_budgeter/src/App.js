// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
      <BrowserRouter>
        {/* Navigation */}
        <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          {/*<Link to="/about">About</Link> |{" "}*/}
          {/*<Link to="/contact">Contact</Link>*/}
        </nav>
        </header>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/*<Route path="/about" element={<About />} />*/}
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
