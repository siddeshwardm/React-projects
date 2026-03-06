function WeatherCard({weather}){

  return(

    <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-80 text-center mb-6">

      <h2 className="text-xl font-semibold mb-4">
        Current Weather
      </h2>

      <p className="text-lg">
        🌡 Temperature: {weather.temp}°C
      </p>

      <p>
        💨 Wind: {weather.windspeed} km/h
      </p>

      <p>
        🌧 Rain Chance: {weather.precipprob || 0}%
      </p>

      <p>
        ☁ Condition: {weather.conditions}
      </p>

    </div>

  )
}

export default WeatherCard