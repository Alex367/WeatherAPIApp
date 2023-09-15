import store from "@/store/weather-redux";
import { Provider } from "react-redux";
import "../styles/general.css";
import "../styles/normalize.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Weather API application</title>
        <meta name="description" content="Weather API application" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Aleksandr Liskov" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
