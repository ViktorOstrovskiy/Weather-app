import * as React from "react";
import { useSelector } from "react-redux";
// img
import hot from "../../../assets/img/hot.png";
import cold from "../../../assets/img/cold.png";
// types
import { IDaily, IWeatherAll, IWeatherReducer } from "../../../store/types";
// styles
import s from "../Temperature/Temperature.module.scss";

const Temperature = () => {
  const { weather }: IWeatherReducer = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const { daily } = weather as IWeatherAll;

  const min = (daily || []).map((temp: IDaily) => temp.temp.min);
  const max = (daily || []).map((temp: IDaily) => temp.temp.max);

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
