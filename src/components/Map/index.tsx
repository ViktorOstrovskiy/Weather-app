import * as React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import s from "../Map/Map.module.scss";
import { useSelector } from "react-redux";
import { IWeatherReducer } from "../../store/types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullScreenControl: false,
};
const Map = () => {
  const { counter } = useSelector((state: IWeatherReducer) => state.weathers);

  return (
    <div className={s.map}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={counter}
        zoom={10}
        options={defaultOptions}
      ></GoogleMap>
    </div>
  );
};

export default Map;
