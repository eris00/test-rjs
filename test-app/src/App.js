import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Scan from "./Components/Scan";
import About from "./Components/About";
import Product from "./Components/Product";
import Unavailable from "./Components/Unavailable";
import ErrorPage from "./Components/ErrorPage";
import { useState, useEffect } from 'react'
import api from "./api/post";

function App() {

  const [queryId, setQueryId] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/products/${queryId}`);
        setProducts(response.data)
      } catch(err) {

          console.log(err.message)
        
      } 
    }

    fetchPosts();
  }, [queryId])


  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryId(e.target.value);
  }



  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan handleSubmit={handleSubmit} queryId={queryId} setQueryId={setQueryId} products={products} />} />
        <Route path="/product" element={<Product products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/unavailable" element={<Unavailable />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
