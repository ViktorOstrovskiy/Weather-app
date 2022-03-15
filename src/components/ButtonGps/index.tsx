import * as React from "react";
import { useDispatch } from "react-redux";

// function
import {
  setCounters,
  weathers,
  weathersCity,
} from "../../store/from-service/action";
// img
import home from "../../assets/img/home.png";
// styles
import s from "../ButtonGps/ButtonGps.module.scss";

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
