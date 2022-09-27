import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Portfolio from '../src/pages/Portfolio';
import Skills from '../src/pages/Skills';

const App = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/skills" element={<Skills/>} />

                {/* Redirection vers Home si paramètres inconnus */}
                <Route path="*" element={<Home/>} />

            </Routes>
        </Router>
  );
};

export default App;