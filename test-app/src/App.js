import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Scan from "./Components/Scan";
import About from "./Components/About";
import Product from "./Components/Product";
import Unavailable from "./Components/Unavailable";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/unavailable" element={<Unavailable />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
