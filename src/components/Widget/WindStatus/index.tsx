import * as React from "react";
import s from "../WindStatus/WindStatus.module.scss";
import { useSelector } from "react-redux";
import { IWeatherReducer } from "../../../store/types";
const WindStatus = () => {
  const { weather } = useSelector((state: IWeatherReducer) => state.weathers);
  const { daily } = weather;
  const windStatus = (daily || []).map((wind: any) => wind.wind_speed);

  return (
    <div className={s.windStatus}>
      <h3>WindStatus</h3>
      <p>{windStatus[0]}m/s</p>
      <p>Light breeze</p>
    </div>
  );
};

export default WindStatus;
