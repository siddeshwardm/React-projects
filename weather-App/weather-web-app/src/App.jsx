import { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";

const API_KEY = "V9VDBVQ5H8M8AGJ6DN9EB4WFK";

function App() {

  const [weather,setWeather] = useState(null);
  const [hours,setHours] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchWeather = async (location) => {

    try{

      setLoading(true);

      const url =
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;

      const res = await axios.get(url);

      setWeather(res.data.currentConditions);

      setHours(res.data.days[0].hours.slice(0,24));

    }catch(err){
      console.error(err);
      alert("Location not found");
    }

    setLoading(false);
  };


  useEffect(()=>{

    navigator.geolocation.getCurrentPosition(async(position)=>{

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetchWeather(`${lat},${lon}`);

    });

  },[]);


  return(

    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-6">
        Weather App
      </h1>

      <SearchBar fetchWeather={fetchWeather}/>

      {loading && <Loader/>}

      {weather && !loading && (
        <>
          <WeatherCard weather={weather}/>
          <HourlyForecast hours={hours}/>
        </>
      )}

    </div>
  )
}

export default App