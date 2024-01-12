/* eslint-disable react/prop-types */
import './WeatherTemperature.css';

export default function WeatherTemperature({ temperature }) {
  const { tempC, tempF } = temperature;

  return (
    <div className="weather-temperature">
      <span className="temperature-big">{tempC}°</span>
      <br/>
      <span className="temperature-small">{tempF}°F/{tempC}°C</span>
    </div>
  );
}
