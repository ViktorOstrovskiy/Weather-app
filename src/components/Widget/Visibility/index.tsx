import * as React from "react";
import s from "../Visibility/Visibility.module.scss";
import { useSelector } from "react-redux";
import { IWeatherReducer } from "../../../store/types";

const Visibility = () => {
  const { weatherCity } = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const visibility = weatherCity.visibility;
  return (
    <div className={s.visibility}>
      <h3>Visibility</h3>
      <p>{visibility}m/h</p>
      <div className={s.visibility__table}></div>
    </div>
  );
};

export default Visibility;
