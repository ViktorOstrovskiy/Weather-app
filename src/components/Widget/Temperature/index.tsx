import * as React from "react";
import s from "../Temperature/Temperature.module.scss";
import { useSelector } from "react-redux";
import hot from "../../../assets/img/hot.png";
import cold from "../../../assets/img/cold.png";
import { IWeatherReducer } from "../../../store/types";

const Temperature = () => {
  const { weather } = useSelector((state: IWeatherReducer) => state.weathers);
  const { daily } = weather;

  const min = (daily || []).map((temp: any) => temp.temp.min);
  const max = (daily || []).map((temp: any) => temp.temp.max);

  return (
    <div className={s.temperature}>
      <h3>Min & Max temperature</h3>

      <div className={s.temperature__table}>
        <p>
          <img src={cold} alt="" />
          {Math.round(min[0])}°
        </p>
        <p>
          <img src={hot} alt="" />
          {Math.round(max[0])}°
        </p>
      </div>
    </div>
  );
};

export default Temperature;
