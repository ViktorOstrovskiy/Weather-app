import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// function
import { weathersCity } from "../../store/from-service/action";
// types
import { CurWeather, IWeatherReducer } from "../../store/types";
// styles
import s from "../Info/Info.module.scss";

const Info = () => {
  const { weatherCity }: IWeatherReducer = useSelector(
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

  const { name, main, dt, sys } = weatherCity as CurWeather;

  // const cityTime = weatherCity.timezone;
  const { weather } = weatherCity as CurWeather;
  const img = (weather || []).map((icon) => icon.icon);
  return (
    <div className={s.info}>
      <img src={`${baseImgUrl}${img}@2x.png`} alt="" />
      <h1>{Math.round(main?.temp)}°</h1>
      <div>
        <h3>
          {name},{sys?.country}
        </h3>

        <p className={s.day}>
          {days[new Date(dt * 1000).getDay()]}
          {/* {new Date(cityTime).getHours()}:{new Date(cityTime).getMinutes()} */}
        </p>
      </div>
    </div>
  );
};

export default Info;
