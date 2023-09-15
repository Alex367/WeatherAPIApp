import ForecastItems from "./ForecastItems";
import classes from "../styles/WeatherList.module.css";
import Image from "next/image";

export default function WeatherList(props) {
  const myLoader = ({ src }) => {
    return `http:${props.data.current.image}`;
  };

  return (
    <ul className={`${classes.weather_list}`}>
      <li>
        <h3>Today</h3>
        <div>
          <Image
            loader={myLoader}
            src={`http:${props.data.current.image}`}
            unoptimized={true}
            alt={props.data.current.image_descr}
            width={50}
            height={50}
          ></Image>
          <div className={classes.image_description}>
            {props.data.current.image_descr}
          </div>
          <div className={classes.temperature}>
            <span className={classes.temperature_text}>Temperature:</span>
            <span className={classes.temperature_span}>
              {props.data.current.temp}&deg;C
            </span>
          </div>
        </div>
        <div>
          <div>Feels like: {props.data.current.feels}&deg;C</div>
          <div>Humidity: {props.data.current.humidity}&deg;C</div>
        </div>
      </li>
      {props.data.forecast.slice(1).map((item, index) => (
        <ForecastItems
          key={index}
          date={item.date}
          temp={item.day.avgtemp_c}
          image={item.day.condition.icon}
          image_descr={item.day.condition.text}
          maxTemp={item.day.maxtemp_c}
          minTemp={item.day.mintemp_c}
        />
      ))}
    </ul>
  );
}
