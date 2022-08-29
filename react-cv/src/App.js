import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Portfolio from '../src/pages/Portfolio';
import Skills from '../src/pages/Skills';
import Notfound from './pages/Notfound';

const App = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/skills" element={<Skills/>} />

                {/* Redirection vers NotFound si paramètres inconnus */}
                <Route path="*" element={<Notfound/>} />

            </Routes>
        </Router>
  );
};

export default App;