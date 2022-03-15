import * as React from "react";
import s from "../Humidity/Humidity.module.scss";
import { useSelector } from "react-redux";
import { IWeatherReducer } from "../../../store/types";

const Humidity = () => {
  const { weather } = useSelector((state: IWeatherReducer) => state.weathers);
  const { daily } = weather;
  const humidity = (daily || []).map((humidity: any) => humidity.humidity);

  const humudityPer = (humidity: any) => {
    return !humidity
      ? ""
      : humidity >= 70
      ? "Poor high"
      : humidity >= 60 && humidity < 70
      ? "Fair"
      : humidity >= 30 && humidity < 60
      ? "Maintain"
      : humidity >= 25 && humidity < 30
      ? "Fair"
      : "Poor low";
  };

  return (
    <div className={s.humidity}>
      <h3>Humidity</h3>

      {
        <div className={s.humuditys}>
          <div className={s.humuditys__percent}>
            <p>
              <span>{humidity[0]}</span> %
            </p>
            <p>{humudityPer(humidity[0])}</p>
          </div>
          <div className={s.frame}>
            <div
              style={{
                background: `linear-gradient(360deg, #08E ${humidity[0]}%, #fff 50%)`,
              }}
            ></div>
          </div>
        </div>
      }
    </div>
  );
};
export default Humidity;
