function HourlyForecast({hours}){

  return(

    <div className="w-full max-w-4xl">

      <h2 className="text-xl mb-4">
        Next 24 Hours
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4">

        {hours.map((hour,index)=>(

          <div
          key={index}
          className="bg-slate-800 p-4 rounded-lg min-w-[120px] text-center"
          >

            <p>{hour.datetime}</p>

            <p className="text-lg font-semibold">
              {hour.temp}°C
            </p>

            <p className="text-sm">
              {hour.conditions}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}

export default HourlyForecast