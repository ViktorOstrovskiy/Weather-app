import * as React from "react";
import { useSelector } from "react-redux";
// types
import { CurWeather, IWeatherReducer } from "../../../store/types";
// styles
import s from "../Visibility/Visibility.module.scss";

const Visibility = () => {
  const { weatherCity }: IWeatherReducer = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const { visibility } = weatherCity as CurWeather;
  return (
    <div className={s.visibility}>
      <h3>Visibility</h3>
      <p>{visibility}m/h</p>
      <div className={s.visibility__table}></div>
    </div>
  );
};

export default Visibility;
