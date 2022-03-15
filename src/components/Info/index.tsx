import * as React from "react";
import s from "../Info/Info.module.scss";
import { useEffect } from "react";
import { weathersCity } from "../../store/from-service/action";
import { useDispatch, useSelector } from "react-redux";
import { IWeatherReducer } from "../../store/types";

const Info = () => {
  const { weatherCity } = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weathersCity());
  }, []);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const baseImgUrl = "http://openweathermap.org/img/wn/";

  const cityName = weatherCity.name;
  const cityTemp = weatherCity.main?.temp;
  const cityDay = weatherCity.dt;
  const country = weatherCity.sys?.country;
  const cityTime = weatherCity.timezone;
  const img = (weatherCity.weather || []).map((icon: any) => icon.icon);
  return (
    <div className={s.info}>
      <img src={`${baseImgUrl}${img}@2x.png`} alt="" />
      <h1>{Math.round(cityTemp)}°</h1>
      <div>
        <h3>
          {cityName},{country}
        </h3>

        <p className={s.day}>
          {days[new Date(cityDay * 1000).getDay()]}
          {/* {new Date(cityTime).getHours()}:{new Date(cityTime).getMinutes()} */}
        </p>
      </div>
    </div>
  );
};

export default Info;
