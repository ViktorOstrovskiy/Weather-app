import * as React from "react";
import s from "../SunInfo/SunInfo.module.scss";
import { useSelector } from "react-redux";
import sunRises from "../../../assets/img/sunrise.png";
import sunSets from "../../../assets/img/sunset.png";
import { IWeatherReducer } from "../../../store/types";
const SunInfo = () => {
  const { weather } = useSelector((state: IWeatherReducer) => state.weathers);
  const { daily } = weather;

  const sunRise = (daily || []).map((sun: any) => sun.sunrise);
  const sunSet = (daily || []).map((sun: any) => sun.sunset);

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
