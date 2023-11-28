import { useEffect, useState } from 'react';

export default function CurrentWeather() {
  const [currentWeather, setCurrentWeather] = useState('');
  const [currentCondition, setCurrentCondition] = useState('');

  const WEATHER_API_URL = "http://api.weatherapi.com/v1/current.json?key=f3bffa43821a439db9b15409230911&q=vancouver&aqi=yes";

  useEffect(() => {
    fetch(WEATHER_API_URL)
    .then(response => response.json())
    .then(data => setCurrentWeather(data.current))
  },[])

  useEffect(() => {
    fetch(WEATHER_API_URL)
    .then(response => response.json())
    .then(data => setCurrentCondition(data.current.condition))
  },[])

  let condition = currentCondition.text;
  let temperature = Math.round(currentWeather.temp_c);

  return {
    condition, 
    temperature
  }
};