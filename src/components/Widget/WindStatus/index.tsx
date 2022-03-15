import * as React from "react";
import { useSelector } from "react-redux";
// types
import { IDaily, IWeatherAll, IWeatherReducer } from "../../../store/types";
// styles
import s from "../WindStatus/WindStatus.module.scss";

const WindStatus = () => {
  const { weather }: IWeatherReducer = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const { daily } = weather as IWeatherAll;
  const windStatus = (daily || []).map((wind: IDaily) => wind.wind_speed);

  return (
    <div className={s.windStatus}>
      <h3>WindStatus</h3>
      <p>{windStatus[0]}m/s</p>
      <p>Light breeze</p>
    </div>
  );
};

export default WindStatus;
