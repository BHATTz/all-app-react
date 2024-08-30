// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function WeatherComponent() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       url: "https://weatherapi-com.p.rapidapi.com/current.json",
//       params: { q: "New Delhi, India" },
//       headers: {
//         "x-rapidapi-key": "a540bd3ce1mshdd5c96ce860bf58p1b0579jsna7223574fc04",
//         "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
//       },
//     };

//     const fetchWeather = async () => {
//       try {
//         const response = await axios.request(options);
//         setWeatherData(response.data);
//       } catch (error) {
//         setError(error);
//         console.error(error);
//       }
//     };

//     fetchWeather();
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//   {error ? (
//     <p className="text-red-500 text-xl">Error fetching weather data</p>
//   ) : weatherData ? (
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <h3 className="text-2xl font-semibold mb-4">Weather Information</h3>
//       <p className="text-lg">Location: <span className="font-medium">{weatherData.location.name}</span></p>
//       <p className="text-lg">Temperature: <span className="font-medium">{weatherData.current.temp_c}°C</span></p>
//       <p className="text-lg">Condition: <span className="font-medium">{weatherData.current.condition.text}</span></p>
//     </div>
//   ) : (
//     <p className="text-gray-500 text-xl">Loading...</p>
//   )}
// </div>

//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { z } from "zod";
import { Link } from "react-router-dom";

// Define the Zod schema
const WeatherSchema = z.object({
  location: z.object({
    name: z.string(),
  }),
  current: z.object({
    temp_c: z.number(),
    condition: z.object({
      text: z.string(),
    }),
  }),
});

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("New Delhi, India");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchWeather = async (query) => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: query },
        headers: {
          "x-rapidapi-key":
            "a540bd3ce1mshdd5c96ce860bf58p1b0579jsna7223574fc04",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);

        // Validate response data against the schema
        WeatherSchema.parse(response.data);

        setWeatherData(response.data);
        setError(null); // Reset error state
      } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
          setError("Invalid data format");
        } else {
          setError("Error fetching weather data");
        }
        setWeatherData(null); // Reset weather data state
        console.error(error);
      }
    };

    // If search term is not empty, use it as the query
    if (searchTerm.trim() !== "") {
      fetchWeather(searchTerm.trim());
    } else {
      // If search term is empty, use the current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const query = `${latitude},${longitude}`;
            await fetchWeather(query);
          },
          (error) => {
            console.error("Error getting location:", error);
            fetchWeather(location); // Fallback to default location if geolocation fails
          }
        );
      } else {
        fetchWeather(location); // Fallback to default location if geolocation is not supported
      }
    }
  }, [searchTerm, location]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setLocation(searchTerm.trim());
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : weatherData ? (
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Weather Information</h3>
            <p className="text-lg">Location: {weatherData.location.name}</p>
            <p className="text-lg">
              Temperature: {weatherData.current.temp_c}°C
            </p>
            <p className="text-lg">
              Condition: {weatherData.current.condition.text}
            </p>
            <Link to="/">
              <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Go Home
              </button>
            </Link>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </>
  );
}
