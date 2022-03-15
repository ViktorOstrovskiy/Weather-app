import * as React from "react";
import s from "../Conteiner/Conteiner.module.scss";
import HeaderTest from "../Header";
import Search from "../Search";
import Uvi from "../Widget/UVI";
import WindStatus from "../Widget/WindStatus";
import SunInfo from "../Widget/SunInfo";
import Humidity from "../Widget/Humidity";
import Visibility from "../Widget/Visibility";
import Temperature from "../Widget/Temperature";
import Map from "../Map";
import Info from "../Info";
import Clouds from "../Clouds";

import { useJsApiLoader } from "@react-google-maps/api";
const libraries: any = ["places"];

const Conteiner = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDqWzH2QpbASgwk9GuDZVODffALDYuqopI",
    libraries,
  });
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <Search isLoaded={isLoaded} />
        <div>
          <Info />
          <Clouds />
        </div>
      </div>

      <div className={s.content}>
        <div className={s.header}>
          <HeaderTest />
        </div>
        <h2>Todays Highlights</h2>
        <div className={s.widget}>
          <div className={s.widgets}>
            <Uvi />
            <WindStatus />
            <SunInfo />
            <Humidity />
            <Visibility />
            <Temperature />
          </div>
          <div className={s.map}>{isLoaded ? <Map /> : <h2>Loading</h2>}</div>
        </div>
      </div>
    </div>
  );
};

export default Conteiner;
