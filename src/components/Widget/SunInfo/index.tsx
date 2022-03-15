import * as React from "react";
import { useSelector } from "react-redux";
// img
import sunRises from "../../../assets/img/sunrise.png";
import sunSets from "../../../assets/img/sunset.png";
// types
import { IDaily, IWeatherAll, IWeatherReducer } from "../../../store/types";
// styles
import s from "../SunInfo/SunInfo.module.scss";

const SunInfo = () => {
  const { weather }: IWeatherReducer = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const { daily } = weather as IWeatherAll;

  const sunRise = (daily || []).map((sun: IDaily) => sun.sunrise);
  const sunSet = (daily || []).map((sun: IDaily) => sun.sunset);

  return (
    <div className={s.suninfo}>
      <h3>Sunrise & Sunset</h3>
      <p>
        <img src={sunRises} alt="" />
        {new Date(sunRise[0] * 1000).getHours()}:
        {new Date(sunRise[0] * 1000).getMinutes()}
      </p>

      <p>
        <img src={sunSets} alt="" />
        {new Date(sunSet[0] * 1000).getHours()}:
        {new Date(sunSet[0] * 1000).getMinutes()}
      </p>
    </div>
  );
};
export default SunInfo;
