import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as dayjs from "dayjs";
import * as timezone from "dayjs/plugin/timezone";
import * as utc from "dayjs/plugin/utc";

// function
import { weathersCity } from "../../store/from-service/action";
// types
import { CurWeather, IWeatherReducer } from "../../store/types";
// styles
import s from "../Info/Info.module.scss";

const Info = () => {
  const { weatherCity, weather } = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weathersCity());
  }, []);
  const formatDays = (zoneTime: string) => {
    dayjs.extend(timezone);
    dayjs.extend(utc);

    return dayjs().tz(zoneTime).format("dddd,HH:mm");
  };

  const baseImgUrl = "http://openweathermap.org/img/wn/";

  const { name, main, sys } = weatherCity as CurWeather;

  const cityTime = weather.timezone;
  const weathers = weatherCity.weather;
  const img = (weathers || []).map((icon: any) => icon.icon);

  return (
    <div className={s.info}>
      <img src={`${baseImgUrl}${img}@2x.png`} alt="" />
      <h1>{Math.round(main?.temp)}°</h1>
      <div>
        <h3>
          {name},{sys?.country}
        </h3>

        <p className={s.day}>{formatDays(cityTime)}</p>
      </div>
    </div>
  );
};

export default Info;
