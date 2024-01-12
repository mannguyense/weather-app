import WeatherHeader from "../WeatherHeader/WeatherHeader";
import { useEffect, useState } from "react";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import axios from "axios";
import "./Weather.css";

// TODO: 1. Thêm debounce time vào search city
// TODO: 2. Xử lí lại việc loading, ko dùng weather làm condition cho việc loading nữa

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    // Event loop? What is Event loop?
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json", {
          params: {
            q: searchCity,
            key: "1c64e41282e74ee89fb100603241201",
          },
        }
      )
      .then(({ data }) => {
        const { location, current } = data;
        const cityName = location.name;
        const condition = {
          text: current.condition.text,
          icon: current.condition.icon,
        };
        const temperature = {
          tempC: current.temp_c,
          tempF: current.temp_f,
        };

        setWeather({
          cityName,
          condition,
          temperature,
        });
      });
  }, [searchCity]);

  function onChangeSearchCity(e) {
    setSearchCity(e.target.value);
  }

  return (
    <div>
      <input placeholder="Search city" onChange={(e) => onChangeSearchCity(e)} />
      {!weather ? (
        <p>Loading...</p>
      ) : (
        <>
          <WeatherHeader
            cityName={weather.cityName}
            condition={weather.condition}
          />
          <WeatherTemperature temperature={weather.temperature} />
        </>
      )}
    </div>
  );
}
