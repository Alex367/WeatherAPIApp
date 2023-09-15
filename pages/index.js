import SearchBart from "@/components/SearchBar";
import classes from "../styles/HomePage.module.css";
import Weather from "@/components/Weather";

export default function HomePage() {
  return (
    <section className={classes.main_container}>
      <SearchBart />
      <Weather />
    </section>
  );
}
