import * as React from "react";
import { useSelector } from "react-redux";
// types
import { IDaily, IWeatherAll, IWeatherReducer } from "../../../store/types";
// styles
import s from "../Humidity/Humidity.module.scss";

const Humidity = () => {
  const { weather }: IWeatherReducer = useSelector(
    (state: IWeatherReducer) => state.weathers
  );
  const { daily } = weather as IWeatherAll;
  const humidity = (daily || []).map((humidity: IDaily) => humidity.humidity);

  const humudityPer = (humidity: IDaily | number): string => {
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
