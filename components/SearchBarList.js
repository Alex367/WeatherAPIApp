import { useEffect, useState } from "react";
import classes from "../styles/SearchBarList.module.css";
import SearchBarItems from "./SearchBarItems";

export default function SearchBarList(props) {
  const [isResult, setIsResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/${props.inputData}/search`);
      const data = await response.json();
      if (response.ok) {
        setIsResult(data.result);
      } else if (!response.ok) {
        throw new Error("Failed");
      }
    };

    fetchData();
  }, [props.inputData]);

  return (
    <div className={classes.search_bar_items_container}>
      <ul className={classes.search_bar_items_ul}>
        {isResult?.map((item) => (
          <SearchBarItems
            key={item.id}
            id={item.id}
            name={item.name}
            country={item.country}
            region={item.region}
          />
        ))}
      </ul>
    </div>
  );
}
