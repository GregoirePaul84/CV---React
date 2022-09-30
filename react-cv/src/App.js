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
                <Route path="/CV_React/" element={<Home/>} />
                <Route path="/CV_React/home" element={<Home/>} />
                <Route path="/CV_React/about" element={<About/>} />
                <Route path="/CV_React/portfolio" element={<Portfolio/>} />
                <Route path="/CV_React/skills" element={<Skills/>} />

                {/* Redirection vers Home si paramètres inconnus */}
                <Route path="*" element={<Home/>} />

            </Routes>
        </Router>
  );
};

export default App;