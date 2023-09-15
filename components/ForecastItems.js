import classes from "../styles/ForecastItems.module.css";
import Image from "next/image";

export default function ForecastItems(props) {
  const myLoader = ({ src }) => {
    return `http:${props.image}`;
  };

  return (
    <li>
      <h3>{props.date}</h3>
      <div>
        <Image
          loader={myLoader}
          src={`http:${props.image}`}
          unoptimized={true}
          alt={props.image_descr}
          width={50}
          height={50}
        ></Image>
        <div className={classes.image_description}>{props.image_descr}</div>
        <div className={classes.temperature}>
          <span className={classes.temperature_text}>Temperature:</span>
          <span className={classes.temperature_span}>{props.temp}&deg;C</span>
        </div>
      </div>
      <div>
        <div>Max temp: {props.maxTemp}&deg;C</div>
        <div>Min temp: {props.minTemp}&deg;C</div>
      </div>
    </li>
  );
}
