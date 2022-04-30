import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Weather from './components/weather';
import { themes, ThemeContext } from './utils/theme';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const value = useMemo(
    () => ({ theme, setTheme }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={value}>
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
    </ThemeContext.Provider>
  );
}

export default App;
