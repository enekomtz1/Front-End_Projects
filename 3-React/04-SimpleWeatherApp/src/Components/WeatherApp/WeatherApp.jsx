// Import React and useState hook for managing component state
import React, { useState } from "react";
// Import specific CSS file for the WeatherApp component styling
import "./WeatherApp.css";
// Import the search icon from React Icons for the search functionality
import { CiSearch } from "react-icons/ci";

// Import weather condition icons for dynamic display based on weather data
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

// WeatherApp functional component definition
const WeatherApp = () => {
	// API key for the weather data provider (should be kept secure in a real-world app)
	const api_key = "57c5a6a0bd22bbcabf15b4881ee95363";

	// State hook for managing the weather icon display
	const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

	// Function to handle the search and data fetching for weather information
	const search = async () => {
		const element = document.getElementsByClassName("cityInput");

		// Check if the input field is empty and return early if true
		if (element[0].value === "") {
			return 0;
		} else {
			// Construct the URL for fetching weather data based on user input
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
			// Fetch the weather data from the API
			let response = await fetch(url);
			let data = await response.json();

			// DOM elements for displaying the weather data
			const temperature = document.getElementsByClassName("weather-temp");
			const location = document.getElementsByClassName("weather-location");
			const humidity = document.getElementsByClassName("humidity-percent");
			const wind = document.getElementsByClassName("wind-speed");

			// Update the DOM elements with the fetched weather data
			temperature[0].innerHTML = Math.floor(data.main.temp) + " ºC";
			location[0].innerHTML = data.name;
			humidity[0].innerHTML = data.main.humidity + " %";
			wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";

			// Update the weather icon based on the fetched data
			if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
				setWeatherIcon(clear_icon);
			} else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
				setWeatherIcon(cloud_icon);
			} else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
				setWeatherIcon(drizzle_icon);
			} else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
				setWeatherIcon(drizzle_icon);
			} else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
				setWeatherIcon(rain_icon);
			} else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
				setWeatherIcon(rain_icon);
			} else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
				setWeatherIcon(snow_icon);
			} else {
				setWeatherIcon(clear_icon);
			}
		}
	};

	// Render the WeatherApp component UI
	return (
		<div className="container">
			<div className="top-bar">
				<input type="text" className="cityInput" placeholder="Search City" />
				<div
					className="search-icon"
					onClick={() => {
						search();
					}}
				>
					<CiSearch />
				</div>
			</div>

			<div className="weather-image">
				<img src={weatherIcon} alt="weatherIcon" />
			</div>

			<div className="weather-temp">24ºC</div>

			<div className="weather-location">London</div>

			<div className="data-container">
				<div className="element">
					<img src={humidity_icon} alt="humidity_icon" className="icon" />
					<div className="data">
						<div className="humidity-percent">64%</div>
						<div className="text">Humidity</div>
					</div>
				</div>

				<div className="element">
					<img src={wind_icon} alt="wind_icon" className="icon" />
					<div className="data">
						<div className="wind-speed">18 km/h</div>
						<div className="text">Wind Speed</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export the WeatherApp component for use in other parts of the application
export default WeatherApp;
