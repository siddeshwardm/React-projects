import { useState } from "react";

function SearchBar({fetchWeather}){

  const [location,setLocation] = useState("");

  const handleSearch = ()=>{
    if(location.trim() !== ""){
      fetchWeather(location);
    }
  }

  return(

    <div className="flex gap-2 mb-6">

      <input
      className="px-4 py-2 rounded text-black"
      placeholder="Enter location"
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
      />

      <button
      className="bg-blue-500 px-4 py-2 rounded"
      onClick={handleSearch}
      >
        Search
      </button>

    </div>

  )
}

export default SearchBar