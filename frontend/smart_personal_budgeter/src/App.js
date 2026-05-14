//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
      <BrowserRouter>
        {/* Navigation with NavLink for active styling */}
        <nav style={{ marginBottom: '20px' }}>
          <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
          <NavLink to="/login" style={navLinkStyles}>Sign In</NavLink> |{" "}
          {/*<NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}*/}
          {/*<NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>*/}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="/about" element={<About />} />*/}
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>
  );
}
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});
export default App;
