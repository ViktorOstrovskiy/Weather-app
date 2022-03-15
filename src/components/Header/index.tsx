import * as React from "react";
import s from "../Header/Header.module.scss";
import { useEffect, useState } from "react";
import { weathers } from "../../store/from-service/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Button } from "../../shared";
import { IWeatherReducer } from "../../store/types";
const HeaderTest = () => {
  const dispatch = useDispatch();
  const { weather } = useSelector((state: IWeatherReducer) => state.weathers);
  const baseImgUrl = "http://openweathermap.org/img/wn/";
  const [temp, setTemp] = useState(false);
  const [changeWeather, setChangeWeather] = useState(true);

  useEffect(() => {
    dispatch(weathers());
  }, []);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const countTemp = (data: number) => {
    if (!temp) {
      return Math.round(data) + " °C";
    } else {
      return (Math.round(data) * 9) / 5 + 32 + " °F";
    }
  };

  const { hourly } = weather;
  const { daily } = weather;
  console.log("ds", hourly);
  return (
    <div className={s.header}>
      <div className={s.header__btns}>
        <div className={s.header__view}>
          <Button
            variant="text"
            title="Today"
            days={true}
            onClick={() => setChangeWeather(false)}
            daysChange={!changeWeather}
          />
          <Button
            variant="text"
            title="Week"
            days={true}
            onClick={() => setChangeWeather(true)}
            daysChange={changeWeather}
          />
        </div>
        <div className={s.header__temperature}>
          <Button
            variant="text"
            title="°C"
            tempChange={!temp}
            temp={true}
            onClick={() => setTemp(false)}
          />
          <Button
            variant="text"
            title="°F"
            temp={true}
            tempChange={temp}
            onClick={() => setTemp(true)}
          />
        </div>
      </div>
      <div className={s.header__content}>
        {(changeWeather ? daily || [] : hourly || [])
          .slice(0, 8)
          .map((item: any) => (
            <div className={s.header__block} key={nanoid()}>
              <p>{days[new Date(item.dt * 1000).getDay()]}</p>
              <img src={`${baseImgUrl}${item.weather[0].icon}@2x.png`} alt="" />
              {changeWeather ? (
                <>
                  <p>{countTemp(item.temp.min)}</p>
                  <p>{countTemp(item.temp.max)}</p>
                </>
              ) : (
                <>
                  <p>{countTemp(item.temp)}</p>
                  <p>{new Date(item.dt * 1000).getHours()} : 00</p>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeaderTest;
