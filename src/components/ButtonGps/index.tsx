import * as React from "react";
import {
  setCounters,
  weathers,
  weathersCity,
} from "../../store/from-service/action";
import s from "../ButtonGps/ButtonGps.module.scss";
import { useDispatch } from "react-redux";
import home from "../../assets/img/home.png";

const ButtonGps = () => {
  const dispatch = useDispatch();

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          setCounters({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        );
        dispatch(weathers());
        dispatch(weathersCity());
      },
      (error) => {}
    );
  };

  return (
    <button className={s.btn} onClick={getUserLocation}>
      <img src={home} alt="" />
    </button>
  );
};

export default ButtonGps;
