import React from 'react';
import { useParams } from 'react-router-dom';

export default function WeatherToday() {
  const { lat, lon } = useParams();
  return (
    <div>WeatherToday</div>
  );
}
