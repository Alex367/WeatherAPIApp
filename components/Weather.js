import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WeatherList from "./WeatherList";
import classes from "../styles/Weather.module.css";

export default function Weather() {
  const selectedCity = useSelector((state) => state.weatherReducer.city);
  const [isFetchData, setIsFetchData] = useState(null);

  useEffect(() => {
    const fetchConcreteData = async () => {
      try {
        const response = await fetch(`/api/${selectedCity}/forecast`);
        const { result: data } = await response.json();

        // transform data
        const currentData = {
          image: data.current.condition.icon,
          image_descr: data.current.condition.text,
          humidity: data.current.humidity,
          feels: data.current.feelslike_c,
          temp: data.current.temp_c,
        };
        const forecastData = [...data.forecast.forecastday];
        const location = {
          country: data.location.country,
          city: data.location.name,
        };

        setIsFetchData({
          current: currentData,
          forecast: forecastData,
          location,
        });
      } catch (error) {
        throw new Error("Failed");
      }
    };
    if (selectedCity) {
      fetchConcreteData();
    }
  }, [selectedCity]);

  return (
    <section className={`main_section ${classes.weather_section}`}>
      {isFetchData ? (
        <div>
          <h1 className={classes.weather_header}>
            Weather in {isFetchData.location.city},
            {isFetchData.location.country}
          </h1>
          <WeatherList data={isFetchData} />
        </div>
      ) : (
        <div>
          <h1 className={classes.weather_header}>Weather application</h1>
          <p>Find your city</p>
        </div>
      )}
    </section>
  );
}
