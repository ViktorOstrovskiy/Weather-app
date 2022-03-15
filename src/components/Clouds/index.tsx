import * as React from "react";
import s from "../Clouds/Clouds.module.scss";
import { useSelector } from "react-redux";
import { IWeatherReducer } from "../../store/types";

const Clouds = () => {
  const { weatherCity } = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const clouds = weatherCity.clouds?.all;
  return (
    <div className={s.clouds}>
      <p>Weather Details:</p>
      <ul>
        <li>
          <span>Clouds</span>
          <span>{clouds}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Clouds;
