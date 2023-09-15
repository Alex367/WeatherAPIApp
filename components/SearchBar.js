import { useState } from "react";
import classes from "../styles/SearchBar.module.css";
import SearchBarList from "./SearchBarList";

export default function SearchBart() {
  const [isActiveBar, setIsActiveBar] = useState(false);
  const [isSelectedCity, setIsSelectedCity] = useState("");

  const searchFocusHandler = () => {
    setIsActiveBar(true);
  };

  const searchBlurHandler = () => {
    setIsActiveBar(false);
  };

  const searchCityHandler = async (event) => {
    setIsSelectedCity(event.target.value);
  };

  return (
    <section className={`main_section ${classes.search_section}`}>
      <label htmlFor="search">Search your location:</label>
      <input
        autoComplete="off"
        id="search"
        name="search"
        type="text"
        placeholder="Search... (put min. 3 letters)"
        className={classes.search}
        onFocus={searchFocusHandler}
        onBlur={searchBlurHandler}
        value={isSelectedCity}
        onChange={searchCityHandler}
      />
      {isActiveBar && isSelectedCity && <SearchBarList inputData={isSelectedCity} />}
    </section>
  );
}
