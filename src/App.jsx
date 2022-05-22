import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Weather from './pages/weather';
import WeatherToday from './pages/weatherToday';
import Context from './utils/theme';
import Error from './components/generic/error';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [measure, setMeasure] = useState('metric');
  const value = useMemo(
    () => ({
      theme, setTheme, measure, setMeasure,
    }),
    [theme, measure],
  );
  return (
    <Context.Provider value={value}>
      <div className="bg-red-500">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather/:lat/:lon" element={<Weather />} />
            <Route path="/weather/:lat/:lon/today" element={<WeatherToday />} />
            <Route
              path="*"
              element={<Error description="Nothing to see here" theme="light" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
