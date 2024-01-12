/* eslint-disable react/prop-types */
import "./WeatherHeader.css";

export default function WeatherHeader({ cityName, condition }) {
  return (
    <div className="weather-header">
      <span className="city-name">{cityName}</span>
      <br />
      <div className="condition">
        <span className="condition-text">{condition.text}</span>
        <img src={condition.icon} alt="Condition text icon"/>
      </div>
    </div>
  );
}
