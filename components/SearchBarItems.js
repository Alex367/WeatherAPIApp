import { weatherActions } from "../store/weather-redux";
import classes from "../styles/SearchBarItems.module.css";
import { useDispatch } from "react-redux";

export default function SearchBarItems(props) {
  const dispatch = useDispatch();

  const searchItemHandler = () => {
    dispatch(weatherActions.selectCity(props.name));
  };

  return (
    <li className={classes.items} onMouseDown={searchItemHandler}>
      {props.error ? (
        props.error
      ) : (
        <div className={classes.items_text}>
          {props.name}, {props.country}, {props.region}
        </div>
      )}
    </li>
  );
}
