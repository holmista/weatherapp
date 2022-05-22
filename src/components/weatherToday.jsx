import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import Context from '../utils/theme';
import ToggleTheme from './toggleTheme';
import ToggleMeasure from './toggleMeasure';
import DetailDropDown from './detailDropDown';
import Error from './error';

export default function WeatherToday() {
  const { lat, lon } = useParams();

  const {
    theme, setTheme, measure, setMeasure,
  } = useContext(Context);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${measure}&appid=${process.env.REACT_APP_KEY2}`;
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <div className="h-screen bg-slate-100">
      <Error theme={theme} description="This page is not yet implemented" />
    </div>
  );
  // if (loading) {
  //   return <div>loading...</div>;
  // }
  // if (data) {
  //   return (
  //     <div>
  //       <DetailDropDown title="cloudiness" data={{ cloudiness: data.clouds.all }} />
  //       <DetailDropDown title="coordinates" data=
  // {{ longtitude: data.coord.lon, latitude: data.coord.lat }} />
  //       <DetailDropDown
  //         title="main"
  //         data={{
  //           'feels like': data.main.feels_like,
  //           humidity: data.main.humidity,
  //           pressure: data.main.pressure,
  //           'maximum tempreture': data.main.temp_max,
  //           'minimum tempreture': data.main.temp_min,
  //         }}
  //       />
  //       <DetailDropDown title="weather"
  // data={{ description: data.weather[0].description, icon: data.weather[0].icon }} />
  //       <DetailDropDown title="wind"
  // data={{ wind_direction: data.wind.deg, 'wind speed': data.wind.speed }} />
  //     </div>
  //   );
  // }
}
