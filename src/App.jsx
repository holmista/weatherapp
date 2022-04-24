import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Weather from './components/weather';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:lat/:lon" element={<Weather />} />
          <Route
            path="*"
            element={<div>nothing to see here </div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
