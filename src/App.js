import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Favorite from './Favourite';
import Home from './Home';

function App({arts}) {
  return (
    <div>
      <Router>
      <nav className="d-flex align-items-center mb-4 bg-light ">
        <Link to="/" className='link'>Home</Link>
        <Link to="/favorite" className='link'>Favorite</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite arts={arts}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

