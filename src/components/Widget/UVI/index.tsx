import * as React from "react";
import s from "../UVI/UVI.module.scss";
import { useSelector } from "react-redux";
import { IWeatherReducer } from "../../../store/types";
const Uvi = () => {
  const { weather } = useSelector((state: IWeatherReducer) => state.weathers);
  const { daily } = weather;
  const uvi = (daily || []).map((item: any) => item.uvi);
  const uviIndex = (uvi: any) => {
    return uvi === 0
      ? 0
      : uvi <= 2
      ? 0.05
      : uvi <= 4
      ? 0.1
      : uvi <= 6
      ? 0.35
      : uvi <= 8
      ? 0.65
      : uvi <= 10
      ? 0.85
      : 1;
  };

  return (
    <div className={s.uvi}>
      <h3>UI index</h3>

      {
        <div className={s.uvi__uv}>
          <div className={s.gradient}>
            <svg id="half-circle" viewBox="0 0 106 57" width="150">
              <defs>
                <linearGradient id="orange-to-pink" x1="1" x2="0" y1="0" y2="0">
                  <stop offset={`${uviIndex(uvi[0])}`} stopColor="orange" />
                  <stop
                    offset={`${uviIndex(uvi[0])}` === "0" ? 0 : 0.7}
                    stopColor="rgba(236, 233, 233, 0.89)"
                  />
                </linearGradient>
              </defs>
              <path d="M101 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <span className={s.firstIndex}>1</span>
            <span className={s.secondIndex}>6</span>
            <span className={s.thirdIndex}>9</span>
            <span className={s.lastIndex}>12</span>
            <span className={s.mainIndex}>{uvi[0]}</span>
          </div>
        </div>
      }
    </div>
  );
};

export default Uvi;
