import "./App.css";
import React from "react";
import useFetch from "./utils/useFetch";
import RegionList from "./components/regionList";

function App() {
  const city = "big ben";
  const url = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_KEY}&query=${city}`;
  const { data, loading, error } = useFetch(url);
  // if (loading === false && !error) {
  //   console.log(data.data[0].label, data.data[0].name);
  // }

  return (
    <div className="App">
      {data && <RegionList items={data.data} />}
    </div>
  );
}

export default App;
